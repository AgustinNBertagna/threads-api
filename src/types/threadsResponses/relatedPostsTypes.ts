export type RelatedPostsResponse =
  | RelatedPostsResponseOk
  | RelatedPostsResponseNotOk;

export interface RelatedPostsResponseOk {
  data: Data;
  extensions: Extensions;
}

export interface RelatedPostsResponseNotOk {
  data: null;
  errors: Error[];
  extensions: Extensions;
}

export interface Data {
  relatedPosts: RelatedPosts;
}

export interface RelatedPosts {
  threads: Thread[];
}

export interface Thread {
  id: string;
  thread_header_context: null;
  thread_items: ThreadItem[];
  thread_type: string;
  header: null;
}

export interface ThreadItem {
  post: Post;
  reply_facepile_users: ReplyFacepileUser[];
  line_type: string;
  should_show_replies_cta: boolean;
}

export interface Post {
  pk: string;
  user: User;
  text_post_app_info: PostTextPostAppInfo;
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
  video_versions: VideoVersion[] | null;
  caption: Caption | null;
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
  fbid: string;
}

export interface Caption {
  pk: string;
  text: string;
  has_translation: null;
}

export interface ImageVersions2 {
  candidates: Candidate[];
}

export interface Candidate {
  height: number;
  url: string;
  width: number;
}

export interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  sharing_friction_payload: null;
}

export interface PostTextPostAppInfo {
  is_post_unavailable: boolean;
  pinned_post_info: null;
  share_info: PurpleShareInfo;
  reply_to_author: null;
  direct_reply_count: number;
  repost_count: number;
  hush_info: null;
  __typename: string;
  can_reply: boolean;
  special_effects_enabled_str: string;
  quote_count: number;
  text_fragments: TextFragments;
  is_reply: boolean;
  link_preview_attachment: null;
  fediverse_info: null;
  post_unavailable_reason: null;
}

export interface PurpleShareInfo {
  reposted_post: null;
  quoted_post: QuotedPost | null;
  can_quote_post: boolean;
  can_repost: boolean;
  is_reposted_by_viewer: boolean;
  repost_restricted_reason: string;
}

export interface QuotedPost {
  is_paid_partnership: null;
  carousel_media: null;
  code: string;
  image_versions2: ImageVersions2;
  original_height: number;
  original_width: number;
  video_versions: null;
  caption: Caption;
  pk: string;
  user: User;
  audio: null;
  caption_is_edited: boolean;
  transcription_data: null;
  accessibility_caption: string;
  has_audio: null;
  media_type: number;
  caption_add_on: null;
  text_post_app_info: QuotedPostTextPostAppInfo;
  text_with_entities: null;
  is_fb_only: null;
  is_internal_only: null;
  media_overlay_info: null;
  giphy_media_info: null;
  taken_at: number;
  like_count: number;
  like_and_view_counts_disabled: boolean;
  id: string;
}

export interface QuotedPostTextPostAppInfo {
  special_effects_enabled_str: string;
  text_fragments: TextFragments;
  link_preview_attachment: null;
  share_info: FluffyShareInfo;
  direct_reply_count: number;
  is_post_unavailable: boolean;
}

export interface FluffyShareInfo {
  quoted_post_caption: null;
}

export interface TextFragments {
  fragments: Fragment[];
}

export interface Fragment {
  fragment_type: FragmentType;
  link_fragment: null;
  mention_fragment: MentionFragment | null;
  plaintext: string;
  tag_fragment: TagFragment | null;
}

export enum FragmentType {
  Mention = "mention",
  Plaintext = "plaintext",
  TextAppTag = "text_app_tag",
}

export interface MentionFragment {
  mentioned_user: MentionedUser;
}

export interface MentionedUser {
  is_active_on_text_post_app: boolean;
  username: string;
  id: null;
}

export interface TagFragment {
  id: string;
}

export interface User {
  pk: string;
  id: null;
  username: string;
  eligible_for_text_app_activation_badge: boolean;
  hide_text_app_activation_badge_on_text_app: boolean;
  friendship_status: null;
  text_post_app_is_private: boolean;
  profile_pic_url: string;
  is_verified: boolean;
  transparency_label?: null;
  transparency_product?: null;
  transparency_product_enabled?: boolean;
}

export interface TextWithEntities {
  entities: EntityElement[];
}

export interface EntityElement {
  entity: EntityEntity;
  offset: number;
  length: number;
}

export interface EntityEntity {
  id: string;
  display_text: string;
  entity_type: string;
}

export interface VideoVersion {
  type: number;
  url: string;
}

export interface ReplyFacepileUser {
  profile_pic_url: string;
  id: null;
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

export interface Extensions {
  is_final: boolean;
}
