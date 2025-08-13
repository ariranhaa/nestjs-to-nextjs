export abstract class HashingService {
  abstract hash(password: string): Promise<string>;
  abstract compare(passowrd: string, hash: string): Promise<boolean>;
}
