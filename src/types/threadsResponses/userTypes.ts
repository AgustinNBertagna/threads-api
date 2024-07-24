export interface UserResponse {
  data: Data;
  extensions: Extensions;
}

interface Data {
  user: User | null;
}

interface User {
  pk: string;
  text_post_app_is_private: boolean;
  hd_profile_pic_versions: HDProfilePicVersion[];
  profile_pic_url: string;
  username: string;
  friendship_status: null;
  follower_count: number;
  profile_context_facepile_users: null;
  eligible_for_text_app_activation_badge: boolean;
  hide_text_app_activation_badge_on_text_app: boolean;
  biography: string;
  biography_with_entities: BiographyWithEntities;
  text_app_biography: TextAppBiography;
  account_badges: any[];
  text_post_app_remove_mention_entrypoint: null;
  is_verified: boolean;
  full_name: string;
  bio_links: BioLink[];
  transparency_label: null;
  gating: null;
  id: string;
}

interface BioLink {
  url: string;
  is_verified: boolean;
  link_id: string;
}

interface BiographyWithEntities {
  entities: any[];
  raw_text: string;
}

interface HDProfilePicVersion {
  height: number;
  url: string;
  width: number;
}

interface TextAppBiography {
  text_fragments: TextFragments;
}

interface TextFragments {
  fragments: Fragment[];
}

interface Fragment {
  fragment_type: string;
  link_fragment: null;
  mention_fragment: null;
  plaintext: string;
  tag_fragment: null;
}

interface Extensions {
  is_final: boolean;
}
