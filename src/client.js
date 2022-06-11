import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'b08sb8lh',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skx3VPCs9hkPiXoPMHqu5dX9fcXYKSdbYI84eR4QbsxsEmKqiy7RmF6ce7rHj6tW4fgvjT7FE1fxL2luaGa45Ap8uYHdUo6FWhhGemPFJPlKgn1tmB0mNMMOGAsRUaIiHMLFvCLGj1uP2bz1SDe7JgBm2xtBrkXfOyDpanZ8eEOmJdUvoGnm',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
