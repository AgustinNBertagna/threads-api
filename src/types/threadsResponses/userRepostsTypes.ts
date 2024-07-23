export interface UserRepostsResponse {
  data: Data;
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
  __typename: string;
  cursor: string;
}

interface Node {
  thread_header_context: ThreadHeaderContext;
  thread_items: ThreadItem[];
  thread_type: string;
  id: string;
  __typename: string;
}

interface ThreadHeaderContext {
  context_type: string;
}

interface ThreadItem {
  post: Post;
  reply_facepile_users: ReplyFacepileUser[];
  line_type: string;
  should_show_replies_cta: boolean;
  __typename: string;
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
  carousel_media: null;
  image_versions2: ImageVersions2;
  original_height: number;
  original_width: number;
  video_versions: null;
  caption: null;
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

interface ImageVersions2 {
  candidates: Candidate[];
}

interface Candidate {
  height: number;
  url: string;
  width: number;
}

interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  sharing_friction_payload: null;
}

interface RepostedPost {
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
  video_versions: VideoVersion[] | null;
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
  giphy_media_info: null;
  meta_place: null;
  taken_at: number;
  organic_tracking_token: string;
  like_and_view_counts_disabled: boolean;
}

interface ShareInfo {
  reposted_post?: RepostedPost;
  quoted_post: null;
  can_quote_post: boolean;
  can_repost: boolean;
  is_reposted_by_viewer: boolean;
  repost_restricted_reason: RepostRestrictedReason;
}

interface TextPostAppInfo {
  is_post_unavailable: boolean;
  pinned_post_info: null;
  share_info: ShareInfo;
  reply_to_author: null;
  direct_reply_count: number;
  repost_count: number;
  hush_info: null;
  __typename: Typename;
  can_reply: boolean;
  special_effects_enabled_str: string;
  quote_count: number;
  text_fragments: TextFragments;
  is_reply: boolean;
  link_preview_attachment: LinkPreviewAttachment | null;
  fediverse_info: null;
  post_unavailable_reason: null;
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
  username: Username;
  profile_pic_url: string;
  text_post_app_is_private: boolean;
}

enum Username {
  Bocajrs = "bocajrs",
  TatoAguilera = "tato_aguilera",
}

interface VideoVersion {
  type: number;
  url: string;
}

enum RepostRestrictedReason {
  Private = "private",
}

enum Typename {
  XDTTextPostAppMediaInfo = "XDTTextPostAppMediaInfo",
}

interface LinkPreviewAttachment {
  display_url: string;
  image_url: string;
  title: string;
  url: string;
}

interface TextFragments {
  fragments: Fragment[];
}

interface Fragment {
  fragment_type: string;
  link_fragment: LinkFragment | null;
  mention_fragment: MentionFragment | null;
  plaintext: string;
  tag_fragment: TagFragment | null;
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

interface ReplyFacepileUser {
  profile_pic_url: string;
  id: null;
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

interface Extensions {
  is_final: boolean;
}
