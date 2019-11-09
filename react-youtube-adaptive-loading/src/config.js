/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const YOUTUBE_API_DEV_MODE = true;
const LOCAL_DEV_MODE = true;

const ADAPTIVE_FACTORS = {
  ECT_LIMIT: '4g',
  DEVICE_MEMORY_LIMIT: 4,
  HARDWARE_CONCURRENCY_LIMIT: 4
};

// ray test touch <
const YOUTUBE_API_REQUEST_AMOUNT = {
  MOST_POPULAR_VIDEOS: 12,
  SEARCH: 12,
  RELATED_VIDEOS: 12
};
// ray test touch >

export {
  YOUTUBE_API_DEV_MODE,
  LOCAL_DEV_MODE,
  ADAPTIVE_FACTORS,
  // ray test touch <
  YOUTUBE_API_REQUEST_AMOUNT
  // ray test touch >
};
