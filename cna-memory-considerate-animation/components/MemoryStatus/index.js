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

// TODO: not fixed the following warning
// Warning: Text content did not match. Server: "undefined (Byte)" Client: "57581254 (Byte)"
const MemoryStatus = ({ memoryStatus }) => {
  const {
    totalJSHeapSize,
    usedJSHeapSize,
    jsHeapSizeLimit,
    deviceMemory,
    overLoaded
  } = memoryStatus;

  let memoryStatusList = [
    {
      label: 'Total JSHeapSize',
      value: `${totalJSHeapSize} (Byte)`
    },
    {
      label: 'Used JSHeapSize',
      value: `${usedJSHeapSize} (Byte)`
    },
    {
      label: 'JSHeapSizeLimit',
      value: `${jsHeapSizeLimit} (Byte)`
    },
    {
      label: 'Device Memory',
      value: `${deviceMemory} (GB)`
    },
    {
      label: 'Memory Overloaded?',
      value: overLoaded ? 'Yes, so we have no animation.' : 'No, so we have animation.'
    }
  ];

  return (
    <div className='tags'>
      { memoryStatusList.map(memoryStatusListItem => (
        <div key={memoryStatusListItem.label} className='tag'>
          <div className='tag-value'>{memoryStatusListItem.value}</div>
          <div className='tag-label'>{memoryStatusListItem.label}</div>
        </div>
      )) }
      <style jsx>{`
        .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .tag {
          width: 20%;
          min-width: 120px;
          padding: 10px;
        }
        .tag-label {
          margin-bottom: 4px;
          color: rgba(0,0,0,0.45);
          font-size: 14px;
        }
        .tag-value {
          color: rgba(0,0,0,0.85);
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default MemoryStatus;
