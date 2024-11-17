declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conection: any | null;
        promise: Promise<any> | null;
      };
    }
  }
}

export { };