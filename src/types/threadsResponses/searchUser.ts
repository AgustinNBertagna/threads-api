export interface SearchUserResponse {
  data: Data;
  extensions: Extensions;
}

interface Data {
  xdt_api__v1__users__search_connection: XdtAPIV1UsersSearchConnection;
}

interface XdtAPIV1UsersSearchConnection {
  edges: Edge[];
  inform_module: null;
}

interface Edge {
  node: Node;
}

interface Node {
  username: string;
  pk: string;
  hasOnboardedToTextPostApp: boolean;
  text_post_app_is_private: null;
  is_verified: boolean;
  friendship_status: null;
  follower_count: number;
  profile_context_facepile_users: null;
  full_name: string;
  has_onboarded_to_text_post_app: boolean;
  profile_pic_url: string;
  id: null;
}

interface Extensions {
  is_final: boolean;
}
