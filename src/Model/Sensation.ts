export interface Sensation {
  readonly text: string;
  readonly signature: string;
  readonly votes: {
    readonly up: number;
    readonly down: number;
  };
}
