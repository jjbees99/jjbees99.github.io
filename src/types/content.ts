export type VideoSource = { type: 'local' | 'youtube' | 'vimeo'; src: string; poster?: string };
export interface Project { slug:string; title:string; subtitle?:string; year:string; category:string; tags:string[]; summary:string; description:string[]; featured:boolean; coverImage:string; gallery?:string[]; video?:VideoSource; githubUrl?:string; externalUrl?:string; collaborators?:string[]; methods?:string[]; results?:string[] }
export interface VideoItem { id:string; title:string; year:string; caption:string; poster:string; video:VideoSource; relatedProjectSlug:string; duration?:string }
