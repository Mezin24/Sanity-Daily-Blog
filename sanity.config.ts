import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './app/components/StudioNavbar';
import { defaultDocumentNode } from './sanity.structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  name: 'Mezin_Content_Studio',
  title: 'Mezin Content Studio',

  projectId,
  dataset,
  basePath: '/studio',
  apiVersion,

  plugins: [deskTool({ defaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
