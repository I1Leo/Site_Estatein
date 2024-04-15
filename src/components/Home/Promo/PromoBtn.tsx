import s from "./PromoBtn.module.scss"

export default function PromoBtn() {
   
   let value = document.documentElement.clientWidth > 1505 ? 144 : 106

   return (
      <div className={s.container}>
         <button className={s.btn}>
            <div className={s.text_container}>
               <svg className={s.text} width={`${value}`} height={`${value}`} viewBox={`0 0 144 144`} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Text" d="M6.76 75.1L14.26 74.95L14.23 73.39L9.91 73.48C9.58 73.49 9.27 73.41 8.99 73.25C8.71 73.09 8.49 72.88 8.33 72.6C8.15 72.33 8.07 72.03 8.06 71.7C8.06 71.51 8.09 71.31 8.16 71.11L6.57 70.52C6.5 70.8 6.47 71.08 6.48 71.36Q6.49 71.84 6.64 72.27Q6.7 72.43 6.77 72.58Q6.97 72.98 7.27 73.29Q7.39 73.42 7.53 73.53L6.73 73.54L6.76 75.1Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M66.01 139.74L67.59 129.35L64.15 128.83Q63.29 128.7 62.47 128.84Q62.27 128.87 62.07 128.92Q61.43 129.09 60.87 129.4Q60.55 129.57 60.25 129.79Q59.86 130.08 59.54 130.42Q59.17 130.81 58.88 131.28C58.52 131.87 58.28 132.52 58.17 133.23Q58.04 134.11 58.19 134.93Q58.22 135.12 58.27 135.31C58.45 135.98 58.73 136.58 59.13 137.13C59.54 137.68 60.03 138.14 60.62 138.5C61.21 138.87 61.86 139.11 62.58 139.22L66.01 139.74ZM63.92 130.37L65.81 130.66L64.7 137.96L62.81 137.67Q62.15 137.57 61.6 137.27Q61.52 137.23 61.44 137.18C61.03 136.92 60.68 136.6 60.4 136.21C60.11 135.83 59.9 135.4 59.78 134.93C59.66 134.46 59.64 133.97 59.71 133.47C59.79 132.96 59.96 132.51 60.21 132.09C60.47 131.68 60.79 131.34 61.18 131.05Q61.45 130.86 61.74 130.71Q62.08 130.54 62.47 130.44C62.93 130.32 63.41 130.3 63.92 130.37Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M50.06 134.51C49.96 134.31 49.8 134.17 49.58 134.09Q49.39 134.02 49.21 134.04Q49.08 134.05 48.95 134.11C48.75 134.2 48.61 134.36 48.53 134.58C48.45 134.8 48.46 135.01 48.56 135.21C48.66 135.41 48.82 135.55 49.03 135.63Q49.22 135.7 49.4 135.68Q49.54 135.67 49.67 135.6C49.88 135.51 50.02 135.36 50.09 135.14C50.17 134.92 50.16 134.71 50.06 134.51ZM49.22 132.81L50.69 133.33L53.2 126.26L51.73 125.73L49.22 132.81Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M45.44 123.08C45.18 122.79 44.88 122.53 44.54 122.32Q44.09 122.04 43.61 121.92Q43.39 121.87 43.17 121.84Q42.61 121.78 42.1 121.93Q41.96 121.97 41.82 122.03Q41.55 122.15 41.34 122.32Q41.05 122.56 40.86 122.92C40.64 123.29 40.57 123.66 40.64 124.03Q40.75 124.59 41.12 125.13Q41.49 125.68 41.98 126.19C42.16 126.38 42.34 126.56 42.52 126.73Q42.78 126.98 42.91 127.23C42.99 127.4 42.98 127.59 42.88 127.78C42.77 127.98 42.63 128.11 42.44 128.17C42.26 128.24 42.06 128.25 41.84 128.2C41.61 128.16 41.39 128.07 41.17 127.94C40.99 127.84 40.84 127.7 40.71 127.55C40.57 127.4 40.47 127.23 40.39 127.05C40.32 126.88 40.29 126.7 40.29 126.54L38.85 126.59Q38.86 126.78 38.89 126.97Q39 127.54 39.36 128.06C39.68 128.53 40.1 128.9 40.63 129.19Q41.06 129.42 41.51 129.52Q41.73 129.57 41.96 129.58C42.42 129.62 42.85 129.54 43.25 129.35Q43.4 129.28 43.54 129.18Q43.93 128.91 44.18 128.44C44.39 128.06 44.47 127.67 44.4 127.29C44.33 126.91 44.17 126.54 43.9 126.17Q43.5 125.63 42.93 125.13C42.77 124.98 42.6 124.82 42.44 124.66Q42.2 124.41 42.09 124.14C42.02 123.97 42.03 123.78 42.14 123.59C42.23 123.42 42.37 123.3 42.55 123.24C42.73 123.18 42.93 123.16 43.14 123.2Q43.45 123.26 43.76 123.43Q43.99 123.55 44.17 123.71Q44.24 123.78 44.31 123.86Q44.54 124.13 44.67 124.42C44.75 124.61 44.78 124.78 44.77 124.93L46.21 125.06C46.24 124.72 46.19 124.38 46.05 124.04Q45.84 123.53 45.44 123.08Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M31.7 115.09L32.28 116.56C32.58 116.51 32.88 116.52 33.18 116.59C33.49 116.67 33.76 116.8 34 117Q34.25 117.21 34.41 117.47Q34.56 117.7 34.64 117.97C34.75 118.35 34.77 118.74 34.69 119.14C34.6 119.54 34.43 119.91 34.15 120.24C33.88 120.57 33.55 120.81 33.18 120.96Q32.79 121.12 32.39 121.14Q32.2 121.15 32.01 121.13C31.61 121.09 31.25 120.94 30.93 120.68Q30.85 120.61 30.78 120.53Q30.55 120.29 30.4 119.97C30.27 119.69 30.2 119.39 30.2 119.06L28.64 118.75Q28.61 119.12 28.66 119.49Q28.71 119.98 28.91 120.46C29.12 121.01 29.46 121.49 29.93 121.88Q30.34 122.21 30.8 122.41Q31.02 122.51 31.25 122.57Q31.58 122.66 31.91 122.7Q32.31 122.73 32.72 122.68C33.21 122.63 33.68 122.47 34.14 122.23Q34.18 122.21 34.22 122.19Q34.85 121.84 35.35 121.24Q35.85 120.64 36.09 119.96Q36.18 119.68 36.24 119.39Q36.35 118.77 36.28 118.17Q36.23 117.79 36.11 117.42Q35.98 117.03 35.77 116.69Q35.47 116.19 35 115.8Q34.57 115.44 34.07 115.24Q33.76 115.11 33.42 115.04C32.84 114.93 32.26 114.94 31.7 115.09Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M27.12 108.12Q26.93 107.57 26.56 107.09Q26.19 106.61 25.71 106.29Q25.58 106.2 25.43 106.12C24.99 105.89 24.52 105.74 24.03 105.69Q23.78 105.67 23.53 105.67Q23.03 105.69 22.54 105.82Q22.45 105.84 22.37 105.87Q21.72 106.08 21.14 106.52Q20.52 107 20.14 107.63Q19.99 107.88 19.87 108.15Q19.63 108.71 19.57 109.29Q19.53 109.69 19.57 110.1Q19.61 110.49 19.72 110.85Q19.91 111.41 20.3 111.91Q20.62 112.33 21.02 112.62Q21.21 112.76 21.43 112.88Q21.73 113.04 22.05 113.14Q22.43 113.27 22.84 113.31C23.33 113.36 23.83 113.31 24.33 113.17Q24.37 113.16 24.41 113.15Q25.11 112.94 25.72 112.47Q26.33 112 26.72 111.38Q26.87 111.13 26.99 110.86Q27.23 110.27 27.29 109.67Q27.33 109.3 27.29 108.91Q27.25 108.5 27.12 108.12ZM24.38 107.35C24.76 107.48 25.07 107.71 25.32 108.04Q25.5 108.27 25.61 108.54Q25.71 108.8 25.74 109.1C25.77 109.49 25.71 109.88 25.55 110.26Q25.5 110.37 25.44 110.48Q25.2 110.9 24.77 111.23Q24.42 111.5 24.02 111.64Q23.84 111.7 23.65 111.73Q23.24 111.8 22.84 111.74Q22.66 111.71 22.48 111.64C22.1 111.51 21.78 111.29 21.53 110.96Q21.32 110.69 21.22 110.38Q21.14 110.15 21.12 109.89C21.09 109.49 21.16 109.11 21.33 108.73C21.5 108.35 21.75 108.03 22.1 107.76C22.43 107.5 22.81 107.34 23.21 107.27C23.62 107.2 24 107.23 24.38 107.35Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M20.04 97.04L19.19 95.22L11.22 95.93L11.93 97.43L17.99 96.89L13.68 101.19L14.39 102.7L20.04 97.04Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M15.92 85.73Q15.98 85.16 15.85 84.56Q15.71 83.96 15.41 83.46Q15.16 83.05 14.79 82.71C14.25 82.21 13.62 81.89 12.9 81.74L12.89 83.37C13.26 83.49 13.57 83.68 13.82 83.95C14.08 84.21 14.24 84.53 14.32 84.9C14.4 85.25 14.39 85.59 14.3 85.91Q14.23 86.13 14.13 86.33Q14 86.56 13.81 86.76Q13.74 86.84 13.66 86.91Q13.36 87.16 12.98 87.33L11.73 81.68C11.12 81.75 10.57 81.92 10.07 82.19Q9.44 82.54 8.98 83.05Q8.9 83.14 8.83 83.24Q8.55 83.59 8.36 83.99Q8.22 84.31 8.14 84.65Q8.1 84.79 8.08 84.93Q7.97 85.58 8.13 86.27Q8.24 86.78 8.48 87.23Q8.6 87.43 8.74 87.63Q8.95 87.9 9.19 88.13Q9.49 88.41 9.84 88.62C10.26 88.87 10.73 89.04 11.24 89.13Q11.28 89.13 11.33 89.14Q12.05 89.25 12.81 89.08Q13.56 88.91 14.17 88.52Q14.42 88.36 14.64 88.16Q15.11 87.73 15.41 87.22Q15.61 86.89 15.74 86.52Q15.88 86.13 15.92 85.73ZM10.9 83.48L11.83 87.64C11.46 87.65 11.11 87.6 10.78 87.47C10.45 87.34 10.17 87.14 9.94 86.89C9.71 86.63 9.55 86.32 9.47 85.98Q9.4 85.64 9.44 85.32Q9.46 85.13 9.52 84.95C9.62 84.62 9.79 84.32 10.03 84.06C10.27 83.8 10.56 83.6 10.9 83.48Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M8.64 46.01L8.05 47.75L11.08 51.45L6.43 52.53L5.84 54.28L12.44 52.73L16.94 54.25L17.44 52.77L12.94 51.25L8.64 46.01Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M22.95 28.62L26.29 31.92C26.69 32.31 27.14 32.57 27.66 32.69Q28.04 32.79 28.43 32.79Q28.81 32.78 29.19 32.68C29.71 32.55 30.16 32.29 30.55 31.89Q30.86 31.58 31.05 31.2Q31.15 31.02 31.21 30.83C31.35 30.43 31.4 30.03 31.36 29.63L31.94 30.2L33.04 29.09L27.69 23.82L26.6 24.93L29.66 27.96Q29.9 28.19 30.03 28.47Q30.1 28.62 30.14 28.78C30.22 29.09 30.23 29.39 30.15 29.71C30.08 30.01 29.92 30.28 29.68 30.52Q29.46 30.74 29.2 30.88Q29.04 30.95 28.88 31C28.56 31.08 28.25 31.08 27.94 31C27.63 30.93 27.35 30.77 27.12 30.54L24.05 27.51L22.95 28.62Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M33.31 19.27L37.55 25.46L38.84 24.58L36.4 21.01C36.21 20.73 36.1 20.44 36.08 20.12C36.06 19.8 36.12 19.49 36.26 19.2C36.39 18.91 36.59 18.67 36.87 18.49C37.03 18.38 37.21 18.3 37.41 18.25L37.04 16.6C36.77 16.69 36.52 16.82 36.29 16.97Q35.89 17.25 35.61 17.61Q35.51 17.75 35.42 17.89Q35.2 18.28 35.1 18.7Q35.06 18.87 35.05 19.04L34.6 18.39L33.31 19.27Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M50.71 6.91L53.28 17.09L56.65 16.24Q57.5 16.03 58.2 15.58Q58.37 15.47 58.53 15.35Q59.05 14.95 59.45 14.45Q59.68 14.16 59.87 13.84Q60.12 13.43 60.28 12.99Q60.47 12.48 60.55 11.94C60.66 11.26 60.63 10.57 60.45 9.86Q60.24 9.01 59.78 8.31Q59.67 8.14 59.56 7.99C59.14 7.44 58.64 6.99 58.05 6.65C57.47 6.29 56.84 6.06 56.15 5.96C55.47 5.85 54.78 5.88 54.07 6.06L50.71 6.91ZM56.27 14.73L54.41 15.2L52.6 8.04L54.46 7.57Q55.1 7.41 55.72 7.47Q55.82 7.48 55.91 7.5C56.39 7.57 56.83 7.73 57.25 7.98C57.66 8.23 58.02 8.54 58.31 8.93C58.61 9.31 58.82 9.75 58.94 10.25C59.07 10.74 59.09 11.23 59.02 11.71C58.94 12.18 58.78 12.63 58.53 13.04Q58.36 13.33 58.14 13.57Q57.89 13.86 57.58 14.1C57.2 14.4 56.76 14.6 56.27 14.73Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M67.44 6.84L67.71 14.34L69.27 14.29L69.11 9.97C69.1 9.63 69.17 9.32 69.33 9.04C69.48 8.76 69.7 8.54 69.97 8.37C70.24 8.19 70.53 8.1 70.86 8.09C71.06 8.08 71.26 8.11 71.45 8.18L72.02 6.58C71.74 6.52 71.46 6.49 71.18 6.5Q70.7 6.52 70.27 6.68Q70.11 6.74 69.96 6.81Q69.57 7.02 69.26 7.32Q69.14 7.44 69.03 7.58L69 6.79L67.44 6.84Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M79.55 14.75Q80.06 15.02 80.66 15.12Q81.28 15.22 81.85 15.12Q82.33 15.04 82.77 14.83C83.44 14.51 83.97 14.04 84.38 13.44L82.88 12.82C82.62 13.12 82.33 13.33 81.99 13.47C81.65 13.61 81.29 13.64 80.92 13.58C80.56 13.52 80.25 13.39 79.99 13.18Q79.81 13.04 79.67 12.87Q79.5 12.67 79.38 12.42Q79.34 12.32 79.3 12.22Q79.17 11.85 79.16 11.43L84.87 12.37C85.04 11.78 85.08 11.2 85.01 10.64Q84.92 9.92 84.62 9.31Q84.56 9.2 84.5 9.1Q84.28 8.71 83.98 8.39Q83.74 8.14 83.45 7.93Q83.33 7.85 83.21 7.77Q82.64 7.43 81.95 7.32Q81.43 7.23 80.93 7.3Q80.69 7.32 80.46 7.39Q80.13 7.47 79.82 7.62Q79.46 7.79 79.14 8.04C78.74 8.34 78.41 8.71 78.14 9.15Q78.12 9.19 78.1 9.22Q77.73 9.85 77.6 10.62Q77.48 11.38 77.62 12.09Q77.67 12.38 77.78 12.66Q78 13.26 78.36 13.73Q78.59 14.03 78.89 14.29Q79.2 14.56 79.55 14.75ZM83.51 10.94L79.31 10.25C79.43 9.9 79.61 9.59 79.85 9.34C80.09 9.08 80.38 8.89 80.7 8.77C81.03 8.65 81.37 8.62 81.72 8.68Q82.06 8.74 82.34 8.89Q82.51 8.98 82.66 9.1C82.93 9.32 83.14 9.59 83.29 9.91C83.45 10.23 83.52 10.57 83.51 10.94Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M99.86 13L98.41 12.4L98.06 13.46C97.95 13 97.74 12.57 97.45 12.19Q97.4 12.12 97.35 12.06Q96.93 11.57 96.26 11.29Q95.7 11.06 95.13 11.02Q94.94 11 94.75 11.01Q94.32 11.01 93.92 11.11Q93.6 11.18 93.29 11.31Q93.07 11.4 92.86 11.52Q92.42 11.78 92.05 12.15Q91.93 12.26 91.83 12.39Q91.44 12.84 91.2 13.43C90.99 13.94 90.89 14.46 90.89 14.99Q90.9 15.4 90.98 15.8Q91.06 16.16 91.2 16.49Q91.33 16.8 91.5 17.09Q91.74 17.46 92.06 17.79C92.43 18.16 92.87 18.45 93.38 18.66Q94.04 18.93 94.66 18.85Q94.7 18.84 94.74 18.84C95.18 18.76 95.57 18.59 95.92 18.31L95.56 19.34L97.01 19.94L99.86 13ZM95.11 17.39C94.72 17.46 94.32 17.42 93.91 17.25Q93.59 17.12 93.33 16.91Q93.12 16.73 92.95 16.5Q92.8 16.3 92.69 16.07Q92.54 15.74 92.48 15.36Q92.46 15.19 92.46 15.01Q92.46 14.55 92.65 14.1C92.82 13.68 93.07 13.34 93.41 13.08Q93.68 12.87 93.98 12.74Q94.25 12.63 94.54 12.58C94.95 12.52 95.36 12.56 95.77 12.73Q96.27 12.94 96.58 13.3Q96.64 13.38 96.7 13.47C96.93 13.79 97.05 14.16 97.09 14.58C97.12 14.99 97.05 15.41 96.87 15.83Q96.65 16.38 96.25 16.76Q96.2 16.81 96.15 16.86C95.84 17.13 95.49 17.31 95.11 17.39Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M106.56 16.52L102.02 22.49L103.26 23.44L105.87 20.01C106.07 19.75 106.31 19.55 106.61 19.43C106.9 19.31 107.21 19.26 107.52 19.29Q107.76 19.31 107.97 19.39Q108.19 19.48 108.4 19.63Q108.66 19.84 108.83 20.1Q108.91 20.23 108.97 20.37C109.09 20.66 109.13 20.97 109.09 21.29C109.05 21.6 108.93 21.9 108.71 22.18L106.11 25.6L107.35 26.55L109.96 23.12C110.17 22.84 110.42 22.64 110.72 22.52C111.01 22.4 111.31 22.36 111.62 22.39C111.94 22.43 112.22 22.55 112.49 22.75C112.75 22.95 112.94 23.2 113.05 23.5C113.16 23.79 113.2 24.1 113.16 24.42C113.12 24.73 113 25.02 112.8 25.29L110.19 28.71L111.43 29.66L114.28 25.91C114.62 25.47 114.82 24.99 114.88 24.46C114.94 23.94 114.87 23.43 114.67 22.94Q114.57 22.69 114.43 22.48Q114.15 22.04 113.71 21.7Q113.3 21.39 112.84 21.24Q112.58 21.15 112.3 21.12C111.8 21.05 111.31 21.11 110.84 21.29Q110.87 21.01 110.84 20.74Q110.8 20.28 110.61 19.83C110.41 19.35 110.09 18.95 109.67 18.62Q109.28 18.33 108.85 18.18Q108.69 18.13 108.52 18.09Q108.12 18.01 107.73 18.04Q107.52 18.05 107.32 18.1L107.8 17.47L106.56 16.52Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M129.03 34.88L119.94 40.14L120.72 41.49L124.39 39.37L125.42 41.15Q125.65 41.56 125.99 41.86Q126.24 42.09 126.54 42.25C127.01 42.51 127.52 42.64 128.07 42.64Q128.31 42.64 128.54 42.61Q129.11 42.52 129.65 42.21C130.15 41.92 130.54 41.54 130.81 41.06Q131.04 40.67 131.15 40.24Q131.24 39.91 131.24 39.55C131.26 39.01 131.12 38.5 130.84 38.01L129.03 34.88ZM126.69 40.23L125.74 38.59L128.64 36.91L129.59 38.56Q129.73 38.81 129.78 39.08Q129.81 39.22 129.8 39.38C129.8 39.67 129.73 39.94 129.58 40.19C129.44 40.45 129.23 40.65 128.96 40.81Q128.64 40.99 128.31 41.03Q128.21 41.04 128.11 41.04C127.82 41.04 127.55 40.97 127.29 40.83Q127.16 40.75 127.05 40.66Q126.84 40.48 126.69 40.23Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M132.56 48.58L125.47 51.04L125.98 52.51L130.07 51.1C130.39 50.99 130.7 50.97 131.01 51.03C131.33 51.1 131.61 51.24 131.85 51.44C132.09 51.65 132.27 51.91 132.38 52.22C132.44 52.41 132.47 52.6 132.46 52.81L134.16 52.88C134.14 52.6 134.08 52.32 133.99 52.06Q133.83 51.6 133.55 51.24Q133.45 51.11 133.33 50.99Q133.02 50.67 132.64 50.46Q132.49 50.38 132.32 50.32L133.08 50.06L132.56 48.58Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M110.7 124L111.98 122.93L110.06 117.56L114.85 120.54L116.16 119.45L109.29 115.41L107.93 111.66L106.65 112.72L110.7 124Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M128.56 62.48Q128.45 63.05 128.53 63.66Q128.61 64.26 128.87 64.77Q128.94 64.92 129.03 65.06C129.3 65.48 129.63 65.84 130.03 66.12Q130.24 66.27 130.46 66.39Q130.9 66.63 131.39 66.76Q131.48 66.78 131.56 66.8Q132.23 66.94 132.95 66.84Q133.73 66.73 134.37 66.38Q134.62 66.24 134.86 66.06Q135.35 65.7 135.69 65.23Q135.93 64.9 136.09 64.53Q136.26 64.17 136.33 63.79Q136.45 63.21 136.37 62.59Q136.3 62.07 136.09 61.61Q135.99 61.39 135.87 61.19Q135.69 60.9 135.46 60.65Q135.19 60.35 134.86 60.11C134.45 59.82 134 59.62 133.5 59.49Q133.46 59.48 133.42 59.47Q132.71 59.3 131.94 59.4Q131.17 59.51 130.53 59.85Q130.27 59.99 130.03 60.17Q129.53 60.56 129.18 61.05Q128.96 61.36 128.8 61.71Q128.63 62.09 128.56 62.48ZM130.56 64.51C130.29 64.21 130.13 63.86 130.08 63.44Q130.04 63.15 130.08 62.87Q130.12 62.59 130.24 62.32C130.41 61.96 130.66 61.66 130.99 61.41Q131.09 61.34 131.19 61.28Q131.62 61.02 132.15 60.95Q132.59 60.89 133 60.97Q133.19 61.01 133.37 61.07Q133.76 61.22 134.07 61.47Q134.22 61.59 134.34 61.74C134.61 62.04 134.77 62.39 134.82 62.8Q134.87 63.14 134.81 63.45Q134.76 63.7 134.64 63.94C134.47 64.29 134.22 64.59 133.89 64.83C133.55 65.08 133.17 65.23 132.74 65.29C132.32 65.35 131.91 65.31 131.52 65.16C131.14 65.02 130.82 64.81 130.56 64.51Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M125.67 72.99L125.52 74.54L130.34 74.98Q130.08 75.12 129.86 75.3Q129.56 75.54 129.32 75.85Q129.31 75.87 129.29 75.9Q128.91 76.43 128.84 77.2Q128.78 77.86 128.93 78.47Q128.96 78.61 129 78.75Q129.17 79.25 129.44 79.68Q129.58 79.89 129.74 80.08Q129.92 80.3 130.13 80.49Q130.49 80.81 130.92 81.04C131.38 81.29 131.88 81.44 132.43 81.49C132.97 81.53 133.49 81.48 133.98 81.32C134.47 81.16 134.91 80.91 135.3 80.59Q135.53 80.4 135.72 80.19Q136.04 79.84 136.27 79.41C136.52 78.95 136.67 78.46 136.71 77.91Q136.78 77.15 136.5 76.55Q136.49 76.53 136.48 76.5C136.28 76.09 136 75.75 135.63 75.46L136.73 75.56L136.87 74.01L125.67 72.99ZM134.99 76.59C135.18 76.94 135.25 77.33 135.21 77.76Q135.18 78.15 135.03 78.49Q134.93 78.72 134.78 78.92C134.53 79.26 134.21 79.51 133.82 79.69C133.43 79.87 133.01 79.94 132.57 79.9Q132.08 79.86 131.67 79.65Q131.51 79.57 131.37 79.47Q131.07 79.26 130.86 78.99Q130.69 78.78 130.56 78.53C130.38 78.15 130.31 77.75 130.35 77.32Q130.39 76.82 130.63 76.43Q130.7 76.31 130.78 76.2C131.03 75.9 131.35 75.67 131.73 75.51Q131.8 75.49 131.87 75.47Q132.39 75.3 132.98 75.35C133.43 75.39 133.83 75.52 134.18 75.74C134.53 75.96 134.8 76.24 134.99 76.59Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M126.91 88.25Q126.56 88.72 126.37 89.3Q126.18 89.89 126.18 90.47Q126.19 90.95 126.33 91.43C126.55 92.13 126.93 92.73 127.46 93.23L128.31 91.84C128.05 91.54 127.88 91.21 127.8 90.86C127.72 90.5 127.73 90.14 127.85 89.78C127.97 89.44 128.15 89.16 128.39 88.93Q128.56 88.77 128.75 88.66Q128.98 88.52 129.24 88.45Q129.34 88.42 129.45 88.4Q129.84 88.33 130.25 88.38L128.44 93.88C129 94.13 129.56 94.26 130.13 94.28Q130.85 94.3 131.51 94.1Q131.62 94.06 131.73 94.02Q132.15 93.86 132.52 93.61Q132.8 93.41 133.05 93.15Q133.15 93.05 133.24 92.94Q133.66 92.43 133.88 91.76Q134.05 91.27 134.06 90.76Q134.07 90.52 134.05 90.28Q134.01 89.94 133.91 89.62Q133.8 89.24 133.61 88.88C133.37 88.44 133.05 88.06 132.66 87.72Q132.63 87.69 132.59 87.67Q132.03 87.21 131.29 86.96Q130.56 86.72 129.83 86.75Q129.54 86.76 129.24 86.82Q128.63 86.95 128.1 87.24Q127.76 87.42 127.46 87.67Q127.15 87.93 126.91 88.25ZM130.07 92.75L131.4 88.7C131.72 88.88 131.99 89.11 132.21 89.38C132.43 89.66 132.57 89.97 132.64 90.31C132.7 90.65 132.68 90.99 132.57 91.33Q132.47 91.66 132.27 91.91Q132.16 92.06 132.01 92.19C131.76 92.43 131.46 92.6 131.11 92.69C130.77 92.8 130.42 92.82 130.07 92.75Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M129.36 102.07L122.83 98.37L122.06 99.73L125.82 101.86C126.12 102.02 126.34 102.24 126.5 102.52C126.66 102.8 126.74 103.1 126.74 103.42C126.75 103.74 126.67 104.05 126.51 104.33C126.41 104.5 126.29 104.65 126.12 104.79L127.19 106.1C127.39 105.9 127.56 105.68 127.7 105.44Q127.94 105.01 128.02 104.56Q128.06 104.4 128.07 104.23Q128.1 103.78 128 103.37Q127.96 103.2 127.9 103.03L128.59 103.42L129.36 102.07Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M22.18 42.54Q22.63 42.17 22.95 41.66Q23.28 41.14 23.41 40.59Q23.44 40.42 23.47 40.26C23.53 39.76 23.51 39.28 23.38 38.8Q23.32 38.55 23.22 38.32Q23.04 37.86 22.74 37.44Q22.69 37.37 22.64 37.3Q22.22 36.77 21.6 36.38Q20.94 35.96 20.22 35.82Q19.93 35.77 19.64 35.75Q19.03 35.72 18.46 35.87Q18.07 35.96 17.7 36.14Q17.35 36.31 17.05 36.55Q16.59 36.92 16.25 37.46Q15.97 37.9 15.84 38.38Q15.77 38.61 15.74 38.85Q15.69 39.19 15.71 39.53Q15.72 39.93 15.83 40.33C15.95 40.8 16.17 41.25 16.47 41.67Q16.49 41.71 16.52 41.74Q16.96 42.33 17.62 42.74Q18.27 43.15 18.98 43.29Q19.27 43.35 19.57 43.37Q20.2 43.39 20.78 43.24Q21.15 43.14 21.5 42.98Q21.87 42.79 22.18 42.54ZM21.94 39.7C21.96 40.1 21.85 40.48 21.63 40.83Q21.47 41.08 21.26 41.27Q21.05 41.46 20.78 41.59C20.42 41.75 20.04 41.83 19.63 41.8Q19.51 41.8 19.39 41.78Q18.9 41.7 18.45 41.42Q18.07 41.18 17.8 40.85Q17.68 40.71 17.59 40.54Q17.38 40.18 17.3 39.79Q17.27 39.6 17.26 39.41C17.25 39.01 17.36 38.63 17.57 38.29Q17.76 38 18.01 37.79Q18.2 37.63 18.44 37.53C18.8 37.36 19.18 37.29 19.6 37.32C20.01 37.34 20.4 37.47 20.77 37.7C21.13 37.93 21.42 38.22 21.62 38.58C21.83 38.93 21.93 39.31 21.94 39.7Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
                  <path id="Text" d="M120.7 112.22L119.71 113.44L120.91 114.43L121.91 113.21L123.74 114.69L124.73 113.48L122.9 112L123.65 111.08L122.44 110.09L121.69 111.01L117.09 107.25L116.1 108.46L120.7 112.22Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
               </svg>
            </div>

            <div className={s.icon_container}></div>
         </button>
      </div>

   )
}