// import { Typography } from "@mui/material"
// import React from "react"
// import {
//   CloudImage,
//   LoadingContainer,
//   LoadingContent,
//   LoadingImages,
//   LoadingTitle,
//   LoadingWrapper,
//   RocketImage,
//   RocketImageSmall,
// } from "./styled"

// const LoadingScreen: React.FC = () => {
//   return (
//     <LoadingWrapper>
//       <LoadingContainer>
//         <LoadingContent>
//           <LoadingImages>
//             <RocketImage
//               src="/images/webp/loading/rocket.png"
//               alt="rocket"
//               width={100}
//               height={100}
//             />
//             <RocketImageSmall
//               src="/images/webp/loading/smaller-rocket.png"
//               alt="rocket"
//               width={50}
//               height={50}
//             />
//             <CloudImage
//               src="/images/webp/loading/cloud.png"
//               alt="rocket"
//               width={70}
//               height={50}
//             />
//           </LoadingImages>
//           <LoadingTitle>משק‍לל את הנתונים</LoadingTitle>
//         </LoadingContent>
//       </LoadingContainer>
//     </LoadingWrapper>
//   )
// }

// export default LoadingScreen
import React from "react"
import {
  LoadingWrapper,
  LoadingContainer,
  LoadingContent,
  LoadingImages,
  LoadingTitle,
  RocketImage,
  RocketImageSmall,
  CloudImage,
} from "./styled"
import { Box } from "@mui/material"

const LoadingScreen: React.FC = () => (
  <LoadingWrapper>
    <LoadingContainer>
      <LoadingContent>
        <LoadingImages>
          <Box>
            <CloudImage
              className="cloud-left"
              src="/images/webp/loading/cloud.png"
              alt="cloud"
              width={80}
              height={50}
            />
            <CloudImage
              className="cloud-left"
              src="/images/webp/loading/cloud.png"
              alt="cloud"
              width={60}
              height={40}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <RocketImageSmall
              src="/images/webp/loading/smaller-rocket.png"
              alt="small rocket"
              width={50}
              height={50}
            />
            <RocketImage
              src="/images/webp/loading/rocket.png"
              alt="rocket"
              width={100}
              height={100}
            />
          </Box>

          <Box>
            <CloudImage
              className="cloud-right"
              src="/images/webp/loading/cloud.png"
              alt="cloud"
              width={70}
              height={45}
            />
            <CloudImage
              className="cloud-right"
              src="/images/webp/loading/cloud.png"
              alt="cloud"
              width={65}
              height={42}
            />
          </Box>
        </LoadingImages>
        <LoadingTitle>משקלל את הנתונים</LoadingTitle>
      </LoadingContent>
    </LoadingContainer>
  </LoadingWrapper>
)

export default LoadingScreen
