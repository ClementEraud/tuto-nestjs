import { User } from './user';
import { v4 as uuidv4 } from 'uuid';

describe('domain/User', () => {
  describe('constructor', () => {
    it('should create a new User', () => {
      // GIVEN
      const firstName = 'Karl';
      const lastName = 'Marx';

      // WHEN
      const user = new User(uuidv4(), firstName, lastName);

      // THEN
      expect(user.id).toBeDefined();
      expect(user.firstName).toBe('Karl');
      expect(user.lastName).toBe('Marx');
    });

    it('should fail when first name is null', () => {
      // GIVEN
      const firstName = null;
      const lastName = 'Marx';

      // WHEN
      const result = () => new User(uuidv4(), firstName, lastName);

      // THEN
      expect(result).toThrowError('Names cannot be null or empty.');
    });

    it('should fail when last name is empty', () => {
      // GIVEN
      const firstName = 'Karl';
      const lastName = '';

      // WHEN
      const result = () => new User(uuidv4(), firstName, lastName);

      // THEN
      expect(result).toThrowError('Names cannot be null or empty.');
    });
  });
});
