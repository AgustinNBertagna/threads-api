export interface FeedResponse {
  data: Data;
  extensions: Extensions;
}

interface Data {
  feedData: FeedData;
  viewer: Viewer;
}

interface FeedData {
  edges: Edge[];
  page_info: PageInfo;
}

interface Edge {
  text_post_app_thread: TextPostAppThread;
  cursor: string;
  node: Node;
}

interface Node {
  __typename: NodeTypename;
  id: string;
}

enum NodeTypename {
  XDTThread = "XDTThread",
}

interface TextPostAppThread {
  thread_header_context: null;
  thread_items: ThreadItem[];
  thread_type: ThreadType;
  id: string;
}

interface ThreadItem {
  post: Post;
  reply_facepile_users: ReplyFacepileUser[];
  line_type: LineType;
  should_show_replies_cta: boolean;
}

enum LineType {
  Line = "line",
  None = "none",
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
  video_versions: PostVideoVersion[] | null;
  caption: Caption;
  like_count: number;
  audio: null;
  caption_is_edited: boolean;
  transcription_data: null;
  accessibility_caption: null | string;
  has_audio: boolean | null;
  media_type: number;
  has_liked: boolean;
  caption_add_on: null;
  text_with_entities: TextWithEntities | null;
  giphy_media_info: GiphyMediaInfo | null;
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
  accessibility_caption: null | string;
  has_audio: null;
  image_versions2: ImageVersions2;
  original_height: number;
  original_width: number;
  pk: string;
  video_versions: CarouselMediaVideoVersion[] | null;
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

interface CarouselMediaVideoVersion {
  type: number;
  url: string;
  __typename: VideoVersionTypename;
}

enum VideoVersionTypename {
  XDTVideoVersion = "XDTVideoVersion",
}

interface GiphyMediaInfo {
  images: Images;
}

interface Images {
  fixed_height: FixedHeight;
}

interface FixedHeight {
  height: number;
  webp: string;
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
  reply_to_author: null;
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
  link_fragment: LinkFragment | null;
  mention_fragment: MentionFragment | null;
  plaintext: string;
  tag_fragment: TagFragment | null;
}

enum FragmentType {
  Link = "link",
  Mention = "mention",
  Plaintext = "plaintext",
  TextAppTag = "text_app_tag",
}

interface LinkFragment {
  display_text: string;
  uri: string;
}

interface MentionFragment {
  mentioned_user: MentionedUser;
}

interface MentionedUser {
  is_active_on_text_post_app: boolean;
  username: string;
  id: null;
}

interface TagFragment {
  id: string;
}

interface TextWithEntities {
  entities: EntityElement[];
}

interface EntityElement {
  entity: EntityEntity;
  offset: number;
  length: number;
}

interface EntityEntity {
  id: string;
  display_text: string;
  entity_type: string;
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

interface PostVideoVersion {
  type: number;
  url: string;
}

interface ReplyFacepileUser {
  profile_pic_url: string;
  id: null;
}

enum ThreadType {
  Thread = "thread",
}

interface PageInfo {
  end_cursor: string;
  has_next_page: boolean;
  has_previous_page: boolean;
  start_cursor: null;
}

interface Viewer {
  user: null;
}

interface Extensions {
  is_final: boolean;
}
