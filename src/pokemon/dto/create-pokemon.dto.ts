import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // isINt, ispositive, min(1)
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  //isstring, minlength 1,
  @IsString()
  @MinLength(1)
  name: string;
}
