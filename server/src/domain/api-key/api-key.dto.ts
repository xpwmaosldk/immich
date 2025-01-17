import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class APIKeyCreateDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}

export class APIKeyUpdateDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class APIKeyCreateResponseDto {
  secret!: string;
  apiKey!: APIKeyResponseDto;
}

export class APIKeyResponseDto {
  id!: string;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
