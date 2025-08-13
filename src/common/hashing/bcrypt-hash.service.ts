import { HashingService } from './hashing.service';
import * as bcrypt from 'bcryptjs';

export class BcryptHashingService extends HashingService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  async compare(passowrd: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(passowrd, hash);
    return isValid;
  }
}
