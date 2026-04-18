import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';

export type PaymentMethod = 'PAYPAL' | 'CASHAPP' | 'BANK';
export type ProofStatus = 'PENDING' | 'COMPLETED';

export class ProofImageDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  caption?: string;
}

export class CreateProofDto {
  @IsString()
  productName: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsEnum(['PENDING', 'COMPLETED'])
  status?: ProofStatus;

  @IsEnum(['PAYPAL', 'CASHAPP', 'BANK'])
  paymentMethod: PaymentMethod;

  // PayPal
  @IsOptional() @IsString() customerPayPalEmail?: string;
  @IsOptional() @IsString() payPalName?: string;
  @IsOptional() @IsString() transactionId?: string;
  @IsOptional() @IsString() discordName?: string;
  @IsOptional() @IsString() discordAlias?: string;
  @IsOptional() @IsString() discordId?: string;

  // CashApp
  @IsOptional() @IsString() cashtag?: string;
  @IsOptional() @IsString() customerName?: string;

  // Bank
  @IsOptional() @IsString() bankName?: string;
  @IsOptional() @IsString() accountLast4?: string;

  // Delivery note
  @IsOptional() @IsString() deliveryNote?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  paymentScreenshots?: ProofImageDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  deliveryScreenshots?: ProofImageDto[];
}
