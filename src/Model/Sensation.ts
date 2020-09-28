export interface ApiSensation {
  readonly _id: string;
  readonly id: string;
  readonly message: string;
  readonly timestamp: string;
  readonly dislikes: number;
  readonly likes: number;
  readonly author: string;
}

export interface Sensation {
  readonly id: string;
  readonly text: string;
  readonly signature: string;
  readonly votes: {
    readonly up: number;
    readonly down: number;
  };
}

export const fromApiSensationToSensation = (
  apiSensation: ApiSensation
): Sensation => ({
  id: apiSensation.id,
  text: apiSensation.message,
  signature: apiSensation.author,
  votes: {
    down: apiSensation.dislikes,
    up: apiSensation.likes,
  },
});
