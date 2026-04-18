import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProofDto, ProofImageDto } from './dto/create-proof.dto';
import { UpdateProofDto } from './dto/update-proof.dto';

@Injectable()
export class ProofsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProofDto) {
    const { paymentScreenshots, deliveryScreenshots, ...proofData } = dto;

    return this.prisma.proof.create({
      data: {
        ...proofData,
        paymentScreenshots: {
          create: (paymentScreenshots ?? []).map((img: ProofImageDto, idx: number) => ({
            url: img.url,
            caption: img.caption,
            type: 'PAYMENT',
            sortOrder: idx,
          })),
        },
        deliveryScreenshots: {
          create: (deliveryScreenshots ?? []).map((img: ProofImageDto, idx: number) => ({
            url: img.url,
            caption: img.caption,
            type: 'DELIVERY',
            sortOrder: idx,
          })),
        },
      },
      include: {
        paymentScreenshots: true,
        deliveryScreenshots: true,
      },
    });
  }

  async findAll() {
    return this.prisma.proof.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        paymentScreenshots: { orderBy: { sortOrder: 'asc' } },
        deliveryScreenshots: { orderBy: { sortOrder: 'asc' } },
      },
    });
  }

  async findOne(id: string) {
    const proof = await this.prisma.proof.findUnique({
      where: { id },
      include: {
        paymentScreenshots: { orderBy: { sortOrder: 'asc' } },
        deliveryScreenshots: { orderBy: { sortOrder: 'asc' } },
      },
    });
    if (!proof) throw new NotFoundException(`Proof #${id} not found`);
    return proof;
  }

  async update(id: string, dto: UpdateProofDto) {
    await this.findOne(id);

    const { paymentScreenshots, deliveryScreenshots, ...proofData } = dto;

    const updateData: Record<string, unknown> = { ...proofData };

    if (paymentScreenshots !== undefined) {
      updateData['paymentScreenshots'] = {
        deleteMany: {},
        create: paymentScreenshots.map((img: ProofImageDto, idx: number) => ({
          url: img.url,
          caption: img.caption,
          type: 'PAYMENT',
          sortOrder: idx,
        })),
      };
    }

    if (deliveryScreenshots !== undefined) {
      updateData['deliveryScreenshots'] = {
        deleteMany: {},
        create: deliveryScreenshots.map((img: ProofImageDto, idx: number) => ({
          url: img.url,
          caption: img.caption,
          type: 'DELIVERY',
          sortOrder: idx,
        })),
      };
    }

    return this.prisma.proof.update({
      where: { id },
      data: updateData as any,
      include: {
        paymentScreenshots: { orderBy: { sortOrder: 'asc' } },
        deliveryScreenshots: { orderBy: { sortOrder: 'asc' } },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.proof.delete({ where: { id } });
  }
}
