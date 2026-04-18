import { IsOptional, IsString, IsEnum, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { ProofImageDto, type PaymentMethod, type ProofStatus } from './create-proof.dto';

export class UpdateProofDto {
  @IsOptional() @IsString() productName?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @Transform(({ value }) => parseFloat(value)) @IsNumber() amount?: number;
  @IsOptional() @IsEnum(['PENDING', 'COMPLETED']) status?: ProofStatus;
  @IsOptional() @IsString() deliveryNote?: string;
  @IsOptional() @IsEnum(['PAYPAL', 'CASHAPP', 'BANK']) paymentMethod?: PaymentMethod;

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

  @IsOptional() @IsArray() @ValidateNested({ each: true }) paymentScreenshots?: ProofImageDto[];
  @IsOptional() @IsArray() @ValidateNested({ each: true }) deliveryScreenshots?: ProofImageDto[];
}
