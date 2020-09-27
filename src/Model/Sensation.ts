export interface Sensation {
  text: string;
  signature: string;
  votes: {
    up: number;
    down: number;
  };
}
