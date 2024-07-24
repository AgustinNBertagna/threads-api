export type UserResponsesResponse =
  | UserResponsesResponseOk
  | UserResponsesResponseNotOk;

interface UserResponsesResponseOk {
  data: Data;
  extensions: Extensions;
}

interface UserResponsesResponseNotOk {
  data: null;
  errors: Error[];
  extensions: Extensions;
}

interface Data {
  mediaData: MediaData;
  viewer: Viewer;
}

interface MediaData {
  edges: Edge[];
  page_info: PageInfo;
}

interface Edge {
  node: Node;
  __typename: EdgeTypename;
  cursor: string;
}

enum EdgeTypename {
  XDTUserTextPostsResponseEdge = "XDTUserTextPostsResponseEdge",
}

interface Node {
  thread_header_context: null;
  thread_items: ThreadItem[];
  thread_type: ThreadType;
  id: string;
  __typename: NodeTypename;
}

enum NodeTypename {
  XDTThread = "XDTThread",
}

interface ThreadItem {
  post: Post;
  reply_facepile_users: ReplyFacepileUser[];
  line_type: LineType;
  should_show_replies_cta: boolean;
  __typename: ThreadItemTypename;
}

enum ThreadItemTypename {
  XDTThreadItem = "XDTThreadItem",
}

enum LineType {
  Line = "line",
  None = "none",
  Squiggle = "squiggle",
}

interface Post {
  pk: string;
  user: User;
  text_post_app_info: TextPostAppInfo;
  id: string;
  is_paid_partnership: null;
  is_fb_only: null;
  is_internal_only: null;
  media_overlay_info: null;
  sharing_friction_info: SharingFrictionInfo;
  code: string;
  carousel_media: CarouselMedia[] | null;
  image_versions2: ImageVersions2;
  original_height: number;
  original_width: number;
  video_versions: null;
  caption: Caption;
  like_count: number;
  audio: null;
  caption_is_edited: boolean;
  transcription_data: null;
  accessibility_caption: null;
  has_audio: null;
  media_type: number;
  has_liked: boolean;
  caption_add_on: null;
  text_with_entities: null;
  giphy_media_info: null;
  meta_place: null;
  taken_at: number;
  organic_tracking_token: string;
  like_and_view_counts_disabled: boolean;
}

interface Caption {
  pk: string;
  text: string;
  has_translation: null;
}

interface CarouselMedia {
  accessibility_caption: string;
  has_audio: null;
  image_versions2: ImageVersions2;
  original_height: number;
  original_width: number;
  pk: string;
  video_versions: null;
  id: string;
  code: null;
}

interface ImageVersions2 {
  candidates: Candidate[];
}

interface Candidate {
  url: string;
  height: number;
  width: number;
}

interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  sharing_friction_payload: null;
}

interface TextPostAppInfo {
  is_post_unavailable: boolean;
  pinned_post_info: null;
  share_info: ShareInfo;
  reply_to_author: ReplyToAuthor | null;
  direct_reply_count: number;
  repost_count: number;
  hush_info: null;
  __typename: TextPostAppInfoTypename;
  can_reply: boolean;
  special_effects_enabled_str: string;
  quote_count: number;
  text_fragments: TextFragments;
  is_reply: boolean;
  link_preview_attachment: null;
  fediverse_info: null;
  post_unavailable_reason: null;
}

enum TextPostAppInfoTypename {
  XDTTextPostAppMediaInfo = "XDTTextPostAppMediaInfo",
}

interface ReplyToAuthor {
  username: string;
  id: null;
}

interface ShareInfo {
  reposted_post: null;
  quoted_post: null;
  can_quote_post: boolean;
  can_repost: boolean;
  is_reposted_by_viewer: boolean;
  repost_restricted_reason: RepostRestrictedReason;
}

enum RepostRestrictedReason {
  Private = "private",
}

interface TextFragments {
  fragments: Fragment[];
}

interface Fragment {
  fragment_type: FragmentType;
  link_fragment: null;
  mention_fragment: MentionFragment | null;
  plaintext: string;
  tag_fragment: null;
}

enum FragmentType {
  Mention = "mention",
  Plaintext = "plaintext",
}

interface MentionFragment {
  mentioned_user: MentionedUser;
}

interface MentionedUser {
  is_active_on_text_post_app: boolean;
  username: string;
  id: null;
}

interface User {
  friendship_status: null;
  id: null;
  pk: string;
  eligible_for_text_app_activation_badge: boolean;
  hide_text_app_activation_badge_on_text_app: boolean;
  transparency_label: null;
  transparency_product: null;
  transparency_product_enabled: boolean;
  is_verified: boolean;
  username: string;
  profile_pic_url: string;
  text_post_app_is_private: boolean;
}

interface ReplyFacepileUser {
  profile_pic_url: string;
  id: null;
}

enum ThreadType {
  Thread = "thread",
}

interface PageInfo {
  end_cursor: null;
  has_next_page: boolean;
  has_previous_page: boolean;
  start_cursor: null;
}

interface Viewer {
  user: null;
}

interface Error {
  message: string;
  severity: string;
  code: number;
  api_error_code: number;
  summary: string;
  description: string;
  description_raw: string;
  is_silent: boolean;
  is_transient: boolean;
  is_not_critical: boolean;
  requires_reauth: boolean;
  allow_user_retry: boolean;
  debug_info: null;
  query_path: null;
  fbtrace_id: string;
  www_request_id: string;
}

interface Extensions {
  is_final: boolean;
}
