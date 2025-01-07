import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Billig Bärs'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          color: '#171717',
          background: '#fafafa',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50
        }}
      >
        <svg viewBox="0 0 297.2 363.85" height={450}>
          <g fill="#fafafa">
            <g>
              <path
                fill="#171717"
                d="M179.7,127.02c.07,1.09.64,4.11,1.41,7.88.54,2.91,1.11,5.86,1.72,8.86.34,1.51.68,3.03,1.02,4.56.17.76.34,1.53.52,2.3.2.78.4,1.55.59,2.33.4,1.56.81,3.13,1.22,4.71.47,1.6.95,3.2,1.43,4.81.45,1.6,1.04,3.25,1.6,4.89l.85,2.47c.28.82.65,1.67.97,2.51,2.61,6.67,5.94,13.67,10.98,20.58.64.86,1.26,1.72,1.93,2.57l2.17,2.51,1.1,1.24c.39.41.8.8,1.2,1.2l2.45,2.37c.86.75,1.76,1.48,2.66,2.21l1.35,1.08,1.42.99c.95.65,1.9,1.31,2.87,1.93l2.96,1.7c3.97,2.15,8.06,3.86,11.95,5.07.97.31,1.98.65,2.91.88l1.43.38.16.04.55.13c.73.17,1.46.34,2.14.46,1.38.25,2.77.54,4.02.73,1.25.2,2.43.39,3.52.56,1.05.15,2.01.29,2.85.42,1.69.27,2.79.45,3.22.63.62.26,1.65,1.92,3.68,3.14,1.02.61,2.35,1.14,3.95,1.31.81.09,1.71.1,2.71,0,.97-.1,2.04-.31,3.23-.65,1.53,1.66,5.64,2.84,9.64,3.34,3.98.51,7.89.38,9.4-.84,2.49-2.01,3.74-5.21,3.54-8.48,2.64-1.98,3.56-4.63,4.11-7.46.55-2.83.71-5.85,2.05-8.53.33-3.68-1.64-5.71-1.75-6.55-.11-.84.91-5.4-1.03-8.95-.96-1.74-2.7-3.27-5.61-3.84-2.9-.57-7.03-.24-12.47,1.79-6.03-3.82-10.75-3.58-14.04-.92-3.22,2.66-5.28,7.78-5.36,13.95-1.76.91-3.08,2.32-3.86,4.17-1.55-.02-3.15-.2-4.77-.35-1.61-.23-3.23-.43-4.8-.79l-.29-.06-.15-.03-.07-.02-.42-.11-1.52-.4-1.5-.48c-1-.32-2-.62-2.97-1.03-3.92-1.48-7.7-3.43-11.05-5.93-3.35-2.51-6.24-5.5-8.72-8.71-.6-.82-1.2-1.63-1.8-2.44-.54-.85-1.07-1.7-1.6-2.54-.55-.83-1.02-1.71-1.48-2.58-.46-.87-.94-1.73-1.39-2.6-3.43-7.04-5.79-14.23-7.7-21.22-1.91-6.99-3.22-13.82-4.43-20.32-.65-3.68-1.08-6.38-1.34-7.51"
              />
              <path d="M292.67,196.49c-1.48-1.09-3.1-1.76-4.7-2.14-1.6-.35-3.17-.4-4.56-.31-2.77.22-4.82,1.06-5.03,1.35-.18.26-.29,4.13-1.29,6.14,4.27-1.25,8.38-.49,11.44.59,3.07,1.05,5.08,2.39,5.43,2.12,1.95-1.49,1.43-5.69-1.29-7.75Z" />
              <path d="M287.7,223.05c-1.34,1.72-3.95,2.15-5.58,1.93-1.64-.21-2.29-1.13.49-2.21.18-.08,2.07,1.16,2.67-1.38-5.21.84-15.03-7.18-5.07,1.9-1.39,1.52-3.42,1.39-5.6.52-2.2-.87-4.56-2.47-6.58-3.88-4.01-2.82-6.39-4.91-2.12,1.19-4.42,1.78-7.99-.23-10.18-3.64-2.16-3.38-2.8-8.13-1.66-11.7,1.81-5.76,3.12-6.09,4.13-4.84,1.01,1.25,1.72,4.06,2.12,4.51,4,4.59-.95-4.9-1.18-8.62-.49-7.27,3.25-11.56,7.38-12.55,4.15-.99,8.95,1.42,9.85,7.62.83,6-3.1,13.3-8.67,9.43-5.4-3.75-.37-14.04-5.14-9.74,1.71.37,1.14,5-1.64,4.92,4.48,1.48,2.09,6.92,10.73,8.41-.61,4.73-9.89-5.45-6.71,1.17.27.57,2.38,2.49,3.13,3.59,1.17,1.7-.17,3.31,2.28,3.19.55-.03.98-.06,1.45.33-1.01,3.91.49,4.62,3.13,6.97-3.34-8.66,1.96-10.75,7.13-9.16,2.57.78,5.04,2.51,6.31,4.66,1.28,2.16,1.33,4.77-.68,7.34ZM268.37,200.86c5.59,1.97.5.03-.99-2.13-1.1-1.6-.32-4.37-.67-4.42-.88-.14-.89,4.29,1.66,6.55ZM254.99,206.89l-.83,4.33c3.04,8.89.11-.54.83-4.33ZM275.65,214.8c-1.25.71-.77,3.4-.52,3.44.35.06.81-2.98.52-3.44Z" />
              <path d="M291.76,206.14c-2.13-1.99-6.11-2.85-9.61-2.95-3.5-.09-6.5.54-6.81,1.36-.07.2.87,3.89,1.03,4.02.32.27,2.28-.39,4.98-.01,2.69.38,6.17,1.81,9.18,6.2,1.52.24,3.86-6.15,1.23-8.63Z" />
              <path d="M290.69,186.18c-1.95-1.33-4.17-1.79-6.38-1.74-2.18.1-4.37.74-6.22,1.76-1.01.07.43,6.16.74,6.33.29.14,6.37-.87,5.66-2.5.64,2.94,3.9,1.15,8.78,3.62,1.27-2.17-.46-6.05-2.57-7.46Z" />
            </g>
            <path
              fill="#171717"
              d="M252.45,335.81c9.86-7.14,21.28-13.19,29.89-21.82,15.95-15.99,4.97-14.29-1.83-17.24-2.13-.92-5.44-3.42-7.7-4.03-11.92-3.22-21.68,11.77-28.6,10.27l-7.88-4.95c-3.68-7.71-7.15-16.2-14.85-20.72-8.28-1.81-28.35,5.8-34.84,2.2-1.89-1.05-7.16-16.47-7.15-17.42,0-1.09.46-1.23,1.28-1.65,2.78-1.4,22.32-5.47,34.1-13.57,11.96-8.21,6.81-13.65,5.68-21.45-.46-3.18,1.71-8.08-2.2-11.37,39.85-8.76,44.63-54.83,36.67-88.38-5.96-25.13-23.7-39.22-48.77-26.04l-1.1-22.37c19.3-12.56,18.54-39.67-4.77-46.94-3.78-18.09-25.38-27.59-42.36-24.39-2.25.42-9.34,3.55-10.63,3.3-18.54-15.82-51.83-10.9-63.08,11.37-2.59,1.52-21.38,2.06-30.99,13.75-6.37,7.76-8.94,19.43-5.5,28.97-23.92,14.58-26.45,51.68,5.5,55.74-2.3,9.1.61,21.91,8.62,27.32,3.68,2.49,6.53,1.75,7.52,3.12l5.13,20.9c-26.19,15.61-38.15,25.49-35.57,58.67-3.13,4.79-5.48,10.61-3.3,16.14-.13,1.66-6.5,5.25-7.33,13.57-1.57,15.55,7.47,18.41,19.25,24.75,12.73.04,23.22,5.38,24.02-12.65.69-2.61,4.52-5.25,5.5-8.07,2.52-7.24-3.5-19.97-11-22.74-2.21-13.26-10.58-6.09-9.53-22.37.81-12.55,11.6-22.68,22.55-27.32,4.66,12.7,6.46,26.4,10.82,39.06-5.11,9.75.68,12.1,1.47,14.67,1.45,4.72-2.52,12.44,7.52,17.79,6.75,3.59,20.4,4.81,28.24,4.77,1.22.41,6.59,17.78,6.05,19.62-1.6,2.47-12.95,10.22-14.49,10.45-2.75.41-11.01-4.91-18.79,3.41-.78.34-1.7.81-2.57,1.46-.87-.51-3.57,2.28-4.13,3.02-3.56,4.66-7.69,21.85-6.42,28.42-20.52,1.86-41.26,2.11-61.61,5.5-53.58,8.93-8.51,17.09,12.47,19.8,48.42,6.26,128.97,6.7,178.22,3.67,13.67-.84,67.3-5.33,76.64-11.37,14.44-9.33-36.87-13.29-40.16-14.85ZM207.53,116.7c2.7.12,5.4-.56,8.07-.73,3.27-.21,6.62.16,9.9,0,11.18,14,13.77,32.52,11.55,50.06-.47,3.68-4.27,22.15-6.78,23.65l-13.57,4.03-.92-.55-8.8-73.34.55-3.12ZM227.85,334.16c-18.09-.63-36.17-1.78-54.27-2.2-8.83-.21-47.68.5-50.24,0-8.17-1.6-4.98-9.37-1.83-14.3,7.46-2.38,26.23-14.68,29.52-21.09,4.66-9.07-2.75-20.64-3.67-30.07,3.12.05,11.67-1.68,12.29-1.65,3.35.15,6.05,13.97,8.62,20.35,1.83,4.56,4.52,11.59,8.98,14.12,9.23,5.22,31.02-7.36,37.96-.92.78.72,5.76,9.51,5.87,10.27.54,3.94-5.02,3.42,4.77,16.87l2.57,8.07-.55.55Z"
            />
            <g>
              <g>
                <path
                  className=""
                  d="M263.82,296.02c-2.29,19.25,1.91,6.92,12.47,1.47.05.05.78.42,1.1.92-7.68,5.83-37.86,30.34-43.82,32.45-3,1.06-4.95,1.5-1.28-1.1,9.62-6.81,19.41-13.27,28.6-20.72-.46-3.68-1.21-7.5-.37-11.18.04-.01-.16-1.22.73-.55-.14,13.93.57,13.57.73,0,.8-1.79,1.68-1.18,1.83-1.28Z"
                />
                <path
                  className=""
                  d="M280.87,299.69c.76-.06,5.01.52,5.5.73,5.08,2.17-4.59.12-8.07,1.47l-33.74,26.04c-10.06,6.47-17.6,7.72-2.2-.37l33-25.3c1.74-.91,3.43-2.4,5.5-2.57Z"
                />
                <path
                  className=""
                  d="M88.71,325.73c3.2,9.76,5.24,14.85,14.3,20.54,7.19,4.51,21.84,10.3,28.97,3.3-.16,7.8-14.69,4.26-19.8,2.57-11.16-3.69-24.17-13.3-23.47-26.4Z"
                />
                <path
                  className=""
                  d="M96.6,334.89c-.99.16-.89-.94-1.1-1.47,6.48.08,9.91-5.28,11.37-11,.23-.92-.5-2.18.55-2.93,2.88,3.53-2.82,12.12-6.6,14.3-2,1.16-3.53.95-4.22,1.1Z"
                />
                <path
                  className=""
                  d="M113.47,326.46c-.7-.07-3.03-1.57-4.03-1.83.22-.57-.46-1.96.55-1.83.37.96,8.95,4.2,3.48,3.67Z"
                />
                <path
                  className=""
                  d="M105.58,315.82c.36-.18.88.77.92.92.67,2.82-1.92-.41-.92-.92Z"
                />
                <path
                  className=""
                  d="M109.62,296.75c.36-.05,4.54.29,4.77.37,4.32,1.49-9.2,4.85-.18,18.52-3.41,2.99,8.21,2.66,1.1,6.23,2.6,2.98-5.09,1.03-5.87,0-.4-.53-4.64-11.81-4.77-12.47-.84-4.19-.5-11.86,4.95-12.65Z"
                />
                <path
                  className=""
                  d="M237.23,302.26c10.75,3.4-.06,1.72-7.52,12.65-.48.7-.95,5.63-3.85,4.95-.41-.1-4.24-3.29-3.48-7.15.22-1.1,8.29-8.33,9.72-8.98,2.5-1.14,3.68-.3,5.13-1.47Z"
                />
              </g>
              <g>
                <path
                  className=""
                  d="M72.65,249.22s.02.02.02.02c-.07-.13-.13-.23-.19-.35-.03-.06-.06-.12-.09-.18,0,0,0,0-.01-.01-2.44-4.51-2.13-3.94-7.5-6.95-.38.27-.15.43-.64.8,0,0,0,0,0,0-.78.59-3.87,3.85-6.69,4.7-6.63,2-2.27-.3-2.38-.55-.2-.45-2.01.27-2.2-.92,15.15-4.12,9.39-12.58,7.15-13.57-2.97-1.31-2.44,1.54-4.4,2.93-4.86,3.46-13.56,4.9-16.5-1.83-.28,0-1.13,1.82-1.28,2.2-.61,1.55-1.04,5.02-.73,6.6.55,2.85,3.96,4.4,6.6,4.77,1.13,3.62,5.37,1.02,6.78,1.47,2.58.82-7.35,4.87-13.94-.37-9.28,6.67-9.09,25.09,2.75,28.42-2.59-4.31-1.28-9.08-.37-8.07.39,1.04.17,3.18.37,3.85,1.5,5,7.23,11.87,13.2,8.98-1.33-1.37-2.98-2.57-3.3-4.58-.72-8.69-.35-4.9,1.47-2.2-.28,5.52,8.84,11.52,15.22,6.97,9.42-6.72-2.48-23.49-1.65-7.88-.88,2.73-4.05-7.43.73-13.02.08.05,1.36-.98,1.83.18.22.55-2.33,8.09,3.12,4.58-2.68,6.28,11.02.13,2.64-15.99ZM61.39,265.4c-.2,1.17.24,10.47-.73,5.87-.12-.59-.11-6.22,0-7.15.18-1.44.11-2.28,1.1-3.48,2.27-2.76,2.4-.56,2.57-.55-1.14.79-2.74,4.18-2.93,5.32Z"
                />
                <g>
                  <path
                    className=""
                    d="M112.55,96.53c1.87,5.82,4.42-4.89,2.38,4.95,4.83-.68-2.61,8.39-2.38-4.95Z"
                  />
                  <path
                    className=""
                    d="M109.25,94.69c.84.44,1.61,3.03,2.02,4.22,3.81,11.1-1.34,6.14-2.02-4.22Z"
                  />
                  <path
                    className=""
                    d="M102.28,92.13c.32.01.59,1.61.55,2.02-.52,4.9-2.43-2.11-.55-2.02Z"
                  />
                  <g>
                    <path
                      className=""
                      d="M186.26,161.8c.53.03.8.91.92,1.28.8,2.68,5.13,45.28,5.68,53.72l-.92-.55c-.37-6.56-7.7-51.42-6.6-53.91.02-.05.86-.55.92-.55Z"
                    />
                    <path
                      className=""
                      d="M215.05,204.53c-4.85-35.76-9.35-71.59-11.37-107.66-.76-13.7,2.68-22.83-10.82-27.84-7.15-2.65-18.05-1.94-17.05.18.42.9,11.84-.9,19.62,2.75,8.67,4.06,6.28,14.9,6.78,23.84h0c2.18,38.54,6.97,76.94,12.28,115.15l.55-6.42Z"
                    />
                    <path
                      className=""
                      d="M190.84,143.65c-1.01-1.16-1.88-1.79-3.3-2.38-4.87-2.03-18-2.16-19.8,4.03-.62,2.12.02,8.29.37,10.82,1.66,12.06,1.45,10.85,13.94,4.77.14-4.22-4.14-12.47,1.28-14.49,6.55-2.43.15,1.66-.18,4.95-.07.7.84,8.47,1.28,8.62,4.18-2.12,8.88-3.43,12.29-6.78-7.81-3.8-.54-3.4-5.87-9.53Z"
                    />
                    <path
                      className=""
                      d="M174.53,73.79c2.58,8.96,2.33,30.15.55,18.89-.27-1.71-2.1-18.83-.55-18.89Z"
                    />
                    <path
                      className=""
                      d="M165.72,151.53c.33,2.15,2.73,12.35,2.75,13.02.25,9.09-5.92-13.43-2.75-13.02Z"
                    />
                    <path
                      className=""
                      d="M231,191.87c2.55-.14-2.36,2.56-3.3,2.93-1.27.51-11.17,2.98-11.18,2.38l.55-.92c2.68-.02,13.21-4.36,13.94-4.4Z"
                    />
                    <path
                      className=""
                      d="M173.24,166.57c-29.73,7.22-44.36-5.22-46.76-5.5-2.81-.33-4.4,3.52-3.48,5.32.41.81,13,8.75,14.49,9.35,13.19,5.35,37.39,4.23,41.99-6.6,2.99-7.03-1.18-3.8-6.23-2.57Z"
                    />
                    <path
                      className=""
                      d="M160.96,140.53c.49-.17,7.28.12,7.52,1.28.55,2.65-4.85.04-5.68-.18-.33-.09-5.03.03-1.83-1.1Z"
                    />
                    <path
                      className=""
                      d="M183.69,130.27c.27,1.36.88,3.69.92,4.95.23,7.51-2.84,2.63-.92-4.95Z"
                    />
                    <path
                      className=""
                      d="M102.28,97.63c2.03-.29.09,3.86-1.1,3.67-1.08-.17.72-3.61,1.1-3.67Z"
                    />
                    <path
                      className=""
                      d="M170.68,82.78c-1.12-2.19-.38,7.1-.37,11l-2.38-8.98c-1.04,1.47-.02,4.54-.18,8.43-.01.25-1.96,2.58,1.1,3.67.4.14,3.71.68,4.03-.18-.98-2.62-1.87-13.29-2.2-13.94Z"
                    />
                    <path
                      className=""
                      d="M215.6,103.13c3.96-.66-1.29,3.03-1.65,1.28-.09-.44,1.55-1.27,1.65-1.28Z"
                    />
                    <path
                      className=""
                      d="M115.48,256.05c.09-.02,1.63.47,1.65.55.33,1.4-3.62-.15-1.65-.55Z"
                    />
                    <path className="" d="M75.15,147.5s.74.54.37.73c-.94.5-1.06-.65-.37-.73Z" />
                    <path
                      className=""
                      d="M214.68,218.83c-.82-5.58-1.71,1.66-5.32,3.85-7.99,4.85-13.83-.54-19.25-6.05-2.48-17.8-4.25-35.7-7.52-53.36-1.86,1.31-.43,4.16-.92,6.05-.32,1.25-1.83,2.58-2.2,4.03-.37,1.43-2.53,11.48-2.57,12.1-.57,8.45,6.29,8.06-8.8,14.67.97,7.73,2.11,16.27,1.65,23.65-1.47-3.91-2.51-21.2-3.12-22.55-.6-1.34-2.01-.77-2.2,0-.77,3.17,7.13,24.72,1.83,30.44-8.33,9-19.53-3.56-14.85-4.22,1.05-.15,7.26,12.91,15.95-2.38-2.67-3.59-3.82-21.95-4.77-23.47l-1.28-.92c-5.43.44-10.24-1.05-15.04-3.3l-.55.55c.69,4.19,5.49,26.64,4.77,28.6-.08.22-.59.65-.92.55-1.6-4.64-5-29.57-5.68-30.99-.3-.62-1.18-.85-1.65-1.28-1.67,1.3,7.56,31.8,5.68,38.32-3.02,10.5-24.61,6.59-23.84,1.1.44-3.09,3.35,1.13,5.32,2.02,7.11,3.22,15.75.45,16.69-6.42.53-3.84-6.29-29.44-6.97-36.3-5.15-5.17-9.85-10.71-14.3-16.5-3.49-4.54-9.79-16.56-12.47-15.4-.51-.82,13.17-11.16,14.49-12.65.99,4.15-3.04,7.1-3.12,7.52-.56,2.98,21.49,11.06,22,9.17l-3.3-17.97c-1.15-1.11.21,4.08-1.65,3.48-2.22-.71,2.61-7.42-10.08-10.63-5.15-1.31-10.64-1.3-14.85,2.57-2.54,2.33-1.92,3.14-2.02,3.3-3.14,5.13-1.98-1.13-2.2-2.38-1.92-11.04-6.21-22.53-2.93-33.74-.32-.57-8.57,2.82-10.27,6.97.69,4.15,8.55,30.33,8.07,31.9-.12.39-.99-1.46-1.1,0-.13,1.74,8.31,29.14,9.17,33.74-2.07,1.69-.83-2.5-2.57-3.3-.68-7.29-4.06-14.07-5.87-20.9-3.49-13.2-5.67-26.84-9.53-39.97-.78-2.65-2.96-10.63-3.3-5.13,10.53,38.93,17.32,78.77,27.87,117.72-.62,13.55-22.95,11.01-23.84,4.03-.85-6.68,6.72,9.33,18.15,1.65,7.11-4.78,2.05-12.07,1.65-13.75-7.64-32.22-15.98-64.28-23.84-96.45h-.73c-1.77,6.57,3.96,14.41,2.57,19.8-.33,1.27-6.52,9.42-7.7,12.1-2.8,6.35-1.19,10.61-2.9,5.42h0c-.47-1.41-3.4-11.4-3.33-12.02.05-.44,7.5-7.46.55-2.75-6.16-.35-2.52,3.34-6.42,2.2-2.44-.71-1.27-1.64-2.75-3.3,1.11,3.66,3.96,18.59,4.58,19.99,3.72,8.24-2.25-14.63-2.2-15.59l3.67.37c-.29,1.11,3.09,11.65,3.67,13.57-.02-4.71-2-9.4-3.3-13.94h0c.44-.37,1.12-.67,1.47-.18.37.53,2.86,12.04,2.95,12.78.1.88.2,2.17-.75,2.44-2.4,1.26,4.96-.36,6.78-.37,22.12-.1,14.54,23.93,5.5,28.6-4.9,2.53-2.16-3.88-5.13-4.03-.41.45-.75.93-1.47.73-.33-.09-3.52-4.87-1.28,2.38-2.14,1.65-3.15-8.67-4.4-4.77-.63,1.97,9.5,34.97,10.27,39.97,2.66-1.1-.43-4.17-.73-6.23-.85-5.78,1.95-1.56,3.67,6.23h.73c.33-3.67,2.26-3.21,1.47,0-.41,1.69-6.84,5.36.18,10.45,14.79,10.73,63.73,3.64,81.41-1.1,6.71-1.8,36.33-11.84,35.02-20.72ZM79.18,151.53c-.51-.19.13-1.07.37-1.1,1.12-.12-.08,1.21-.37,1.1ZM92.01,208.01c-.5-.22.12-1.07.37-1.1,1.13-.15.25,1.37-.37,1.1ZM92.01,206.54c-1.44.34-.99-2.36-.73-2.57.41-.32,2.09,2.25.73,2.57ZM91.28,202.88c-.9.56-1.29-1.12-.73-1.47.9-.56,1.29,1.12.73,1.47ZM90.18,200.67c-.49-.32-.09-1.81.37-1.83,1.14-.05-.07,2.03-.37,1.83ZM89.81,198.47c-.51-.19.13-1.07.37-1.1,1.12-.12-.08,1.21-.37,1.1ZM89.45,195.54c.88-.19,1.25,1.23.37,1.47-1.04.28-.8-1.37-.37-1.47ZM88.35,193.71c.56-.2.81.54.37.73-.54.24-.81-.57-.37-.73ZM90.73,216.99c-.65-1.29-4.69-18.1-5.32-21.82,2.14-1.07,4.7,12.05,4.22,13.75,1.15-1.13,3.17,9.03,2.75,9.35-.66.5-1.44-.86-1.65-1.28ZM91.83,219.19s.51-.54.55-.55c1.38-.19-.12,1.52-.55.55ZM91.65,220.84c-.46-.13.68-.72.73-.73,2-.39,1.31,1.06-.73.73ZM92.2,209.29c.06-.19.69-.6.92-.92,4.92,16.96-1.97,4.33-.92.92ZM94.95,217.91c.56-.2.81.54.37.73-.54.24-.81-.57-.37-.73ZM96.05,219.74c.32.13.27.48,0,.73-1.86,1.76-.9-1.11,0-.73ZM96.05,221.21s.56.51.55.55c-.3,1.87-2.71-.8-.55-.55ZM96.42,222.68c.8.16,1.28,3.23,0,2.93-.91-.21-.89-3.11,0-2.93ZM96.23,226.9c.02-.12,1.22-.96,1.28-.92,1.18.73-1.42,1.98-1.28.92ZM109.8,243.03c-.02-1.12,6.94-.06,10.08-3.85,1.94.86-4.96,6.33-10.08,3.85ZM121.72,217.18c-.73.35-1.96-3.3-.73-3.3.47,0,1,2.77.73,3.3ZM120.62,212.41c-.68.42-.76-1.61-.37-1.83.26-.15.97,1.46.37,1.83ZM119.89,209.48c-.58.03-1.07-2.1-.37-2.2.58-.08,1.45,2.15.37,2.2ZM118.78,202.88c1.83.13-.99,5.88-.55.92.03-.3.31-.93.55-.92ZM118.05,200.31c.83-.48.14,2.65-.18.92-.05-.27-.08-.76.18-.92ZM116.95,195.91c-.68.31-.77-1.22-.37-1.47.64-.39.78,1.28.37,1.47ZM115.85,193.34c-.81,0-.32-1.81,0-1.83.64-.05.73,1.83,0,1.83ZM115.12,187.47c.94,0,.6,2.75.37,2.93-.75.58-1.42-2.93-.37-2.93ZM114.38,184.54c.63,0,.63,1.47,0,1.47-.63,0-.63-1.47,0-1.47ZM106.68,162.54l1.83,6.97c-.5.14-2.86-6.23-1.83-6.97ZM108.52,170.6c.66-.34.77,1.23.37,1.47-.17.1-.98-1.14-.37-1.47ZM109.25,175c-.6-.35.1-1.99.37-1.83.6.35-.1,1.99-.37,1.83ZM109.8,177.39c-.02-.33-.1-.74.18-.92,1.18-.75-.07,2.7-.18.92ZM110.35,180.87c-.61-.31.19-1.57.37-1.47.4.22.3,1.81-.37,1.47ZM111.08,183.44c-.43-.25-.27-1.95.37-2.2.58.91-.12,2.35-.37,2.2ZM111.82,186.37c-.43-.25-.27-1.95.37-2.2.58.91-.12,2.35-.37,2.2ZM112.55,189.31c-.61.08-.35-1.42,0-1.47,1.01-.13.49,1.41,0,1.47ZM112.92,191.51c-.1-.37.3-1.1.37-1.1,1.12.03.16,3.03-.37,1.1ZM114.38,195.91c-.26.15-.97-1.46-.37-1.83.68-.42.76,1.61.37,1.83ZM114.75,197.01c.64-.39.78,1.28.37,1.47-.68.31-.77-1.22-.37-1.47ZM115.12,201.41c-.11-.05.25-1.54.37-1.83,1.21.05.36,2.2-.37,1.83ZM115.85,204.34c-.5-.35-.07-1.83.37-1.83.96,0,.42,2.38-.37,1.83ZM116.95,208.38c-.43-.25-.27-1.95.37-2.2.33.22.37,2.64-.37,2.2ZM117.32,198.84c-.09,0-.91-1.54-.37-1.83.89-.48,1.25,1.87.37,1.83ZM118.05,209.84c.3.26.29.84,0,1.1-.05.04-.94-.59,0-1.1ZM118.42,213.51c-.49-.25-.05-1.4.37-1.47.69-.11.33,1.82-.37,1.47ZM118.97,215.89c-.02-.33-.1-.74.18-.92,1.18-.75-.07,2.7-.18.92ZM119.52,219.01c-.43-.2.29-1.46.37-1.47,1.16-.13.34,1.8-.37,1.47ZM123.37,227.26c-3.78.15-.73-2-.73-2.2,0-.44-3.85-3.32-.92-7.15,6.62,14.33-.07,15.35,1.65,9.35ZM126.3,240.46c.59-1.22,5.83,1.9,8.62,2.02,5.97.25,13.36-3.37,14.3-9.9,2.68,15.33-22.4,10.48-22.92,7.88ZM158.57,237.16c3.77-.63,6.59-1.38,9.35-4.22.47,3.44-6.45,5.93-9.35,4.22ZM171.96,230.75c.81-.29,2.56,1.65,2.38,2.02-.27.57-2.48-.67-2.38-2.02ZM181.31,234.6c3.79-.57,8.59-2.45,10.82-5.68,2.69-.11-3.17,8.45-10.82,5.68ZM188.46,229.65c-9.36,5.79-17.6-2.14-17.79-3.12-.79-4.07,4.99,1.84,6.42,2.38,10.26,3.91,14.09-8.14,15.04-8.07,1.34.11,1.9,5.36-3.67,8.8ZM197.63,225.24l5.32,1.28c-1.48.16-5.33-.02-5.32-1.28Z"
                    />
                    <path
                      className=""
                      d="M248.42,115.6c-2.29-6.9-10.13-15.37-17.24-17.24-3.43-.9-6.23-.8-9.72-.73-3.08,3.57-8.3,2.44-7.7,4.4,9.21-1.63,5.6-1.19,4.95.18-.17.36,1.27.74-1.28,2.75-10.58,3.79-17.5,6.96-1.47,1.83,23.21-1.06-8.21,1.31-9.35,5.68-1.49,5.72,6.01-1.43,6.42-1.65,2.59-1.39,5.56-2.03,2.93.73,8.16-1.57,14.54-2.96,20.35,3.85,8.44,9.88,14.51,37.38,9.53,49.87,2.01-12.15-.47-27.21-5.13-38.51-5.71-13.85-10.52-17.62-26.04-13.57,9.31,1.88,13.36-4.22,19.8,5.13,3.32,4.82,10.89,23.8,9.35,25.12-5.54-5.84,1.1,8.37-2.75,14.12,3.07.71-.5,2.32-.37,2.57,4.2,1.36-1.33,2.91-.73,3.67.59.75,3.96-.95.55,3.12,5.35-1.69,4.99,1.07-.18,2.02-.67,1.57,3.84-.61,2.93,1.83-.29.78-3.67.62-3.67,1.47,0,.83,2.24.33,2.57.73.87,1.09-6.04,12.54-6.6,14.67.5,1.29,4.86-6.57,5.32-6.42-4.88,13.69-11.53,13.38-23.29,18.15.26.8,12.98-3.19,15.95-4.95.43-.25,7.34-5.87,7.7-6.23,2.26-2.25,7.73-9.86,5.68-12.65,1.04-.19,2.32-7.83,2.57-9.9.51-4.27.54-27.06,1.1-12.47,2.85,4.35,2.95-.68,4.4-1.1-1.06,7.84-1.27,15.79-3.3,23.47-2.78,10.49-11.49,23.19-20.72,29.15-27.04,9.86-3.83,6.9,7.7-3.67,4.18-3.82,12.02-17.49,13.75-22.92,5.48-17.13,3.61-46.19-4.03-62.53ZM245.12,159.05c-.57.84-3.29-.27-1.65-.92.84-.33,2.17.15,1.65.92ZM244.94,162.17c-1.31.88-3.13-1.05-1.47-1.83,1.33-.62,2.22,1.33,1.47,1.83ZM244.57,153.74c-2.01.94-1.93-2.63-1.1-2.93.45-.16,2.84,2.12,1.1,2.93ZM244.57,150.07c-.84.71-1.9-1.53-1.1-2.2.84-.71,1.9,1.53,1.1,2.2ZM243.1,144.57c.85-.68,2.27,1.98,1.47,2.57-.43.31-2.43-1.8-1.47-2.57ZM243.1,154.84c.49-.34,2.5.09,2.02,1.28-.68,1.69-3.31-.38-2.02-1.28ZM244.2,165.1c-1.54.65-2.33-.93-1.1-1.47,1.43-.62,1.93,1.12,1.1,1.47ZM243.1,181.24c-.8-.36.89-2.66,1.1-2.57.8.36-.89,2.66-1.1,2.57ZM241.27,180.87c.06-1.05,2.83-8.79,3.3-8.8,2.47-.06-2.12,7.59-3.3,8.8ZM245.67,170.97c-1.81.71-1.27-1.59-.73-1.83,1.33-.59,1.46,1.55.73,1.83ZM246.04,168.04c-1.38.42-1.08-1.66-.37-1.83,1.15-.29.87,1.68.37,1.83Z"
                    />
                    <path
                      className=""
                      d="M159.12,153c9.09-1.32,9.75-16.07-6.42-6.23,1.04-2.32,2.79-2.36,3.67-5.87h0c1.14-4.6-.9-12.77-.73-7.7,0-.04-.66-.23-.73-.55-1.01-4.58-1.64-7.99-1.83-12.65-.09-2.23-.19-6.43,0-8.43,1.33-14.14,12.38-14.51,12.47-15.59.25-3.03-16.59-4.81-15.77,5.68-.77-3.17-1.64-6.51-2.2-9.72-.35-2-1.99-16.64-2.2-11.37-.14,3.52,1.26,8.03,1.47,11.55.02.38.1,1.78-.18,1.83-.12-.56-.42-1.04-.55-1.47-.22-.73-2-11.21-2.57-10.08,1.11,5.07.77,10.54,1.83,15.59-2.4-7.99-11.79-2.14-16.87.18,2.99.11,8.9,1.85,11.18,3.48,5.12,3.66,9.65,18.3,10.08,24.39.26,3.69-1.65,18.14-3.12,22.19-.65.03-1.34-8.94-2.38-3.85-.27,1.33,3.06,18.22,3.67,21.64.95,1.23,16.3,1.23,16.87.37l-1.83-12.1c-.78-1.4-10.62,1.82-11.73-1.83,1.4-1.04,3.28-.3,4.03-.55-.26,1.46,2.74,1.26,3.85,1.1Z"
                    />
                    <path
                      className=""
                      d="M215.23,231.85c-1.93-1.45,2.75-4.49-.55-4.03-.13.16-1.3,2.52-2.02,2.2-.5-.22.14-1.94,2.02-2.2,2.8-3.32,4.95-8.38,1.83-12.29-1.05-1.32-1.76-.85-1.83-.92-.68-.66-1.65-.69-2.2-2.02-1.56-9.88-1.03-19.91-3.3-29.34-.23-9.77-2.09-19.75-3.33-29.41-.77-6.14-1.09-12.29-2.9-18.26-.68-9.13-1.76-18.25-2.93-27.32-1.19-9.21-3.58-18.31-3.3-27.69h-.73c-.57,4.55-.09,9.19.37,13.75h-.73c-.61-4.94-.6-11.68-.73-12.28-.7-3.1-.67,2.83-.73,3.3-.04.29-.71.08-.73.37-.3,3.91,1.21,9.33,1.47,13.39-3.36-6.35-15.89-7.12-16.87-4.22-1.38,4.08,2.76,7.11,4.03,10.27,2.36,5.82,2.42,24.42,3.67,32.64,9.97,4.95,7.08,9.25,9.9,12.28h0c.83.89,4.64,2.57,4.77,3.12.1.9-1.46,2.21-2.34,2.93-1.72,1.41-9.54,4.93-9.76,5.5,1.38,10.19,4.46,49.69,6.23,55.01,1.93,5.81,11.2,9.08,17.97-1.28.09.09,1.3-.11,2.2,1.1,11.21,15.1-37.32,26.83-46.39,28.6-3.89.66-8.63.36-11.37.73-.28.04-2.3,1.07-2.57,1.1-14.94,1.85-34.75,3.91-49.14-.37-19.87-5.91-9.89-14.09-10.08-15.22-.37-2.08-3.75,2.31-4.03,4.03-2.78,16.96,47.01,15.8,56.84,15.22,14.07-.84,28.02-3.18,41.07-8.43,3.72-1.5,7.3-3.78,11.37-4.4,0,.14-.49,1.37-1.65,2.2-.63.45-12.96,5.45-14.3,5.87-3.96,1.22-12.63,2.89-17.05,3.67-15.78,2.77-31.85,4.11-47.86,2.57,0,1.86,9.32,1.12,12.47,1.83,9.85,2.23-15.2-.31-16.14,0-3.2,1.08,12.9,2.44,3.3,2.93-1.65,1.53,2.31.75,4.95,2.02-3.47.91-6.62-1.05-10.08-.92l3.48,1.65c-7.94,1.16,5.46,2.24,7.88,2.38,4.45.27,17.63-.14,11,.73-7.19.94-36.57-.16-40.16-7.52-.3-.62-.22-4.66-1.28-3.85-2.02,8.72,13.01,11.17,19.44,12.1,18.1,2.63,39.74.63,57.57-3.3.88-.19,2.32-1.32,2.93-1.47.92-.22,2.78.23,3.67,0,7.95-2.02,39.09-12.55,41.26-20.72.66-2.51-.97-14.59-4.58-6.05ZM203.86,235.88c.1.01.33.38.55.55-5.19,4.57-1.77-.71-.55-.55ZM204.05,238.81c.41-.17.71-.24,1.1-.37-.01,1.25-1.25,1.59-1.1.37ZM204.78,235.51c.67-.07.88-.39,1.47-.37-.08.09-.35,2.22-1.47.37ZM206.61,238.45l1.1-1.83c-.08,2.77-.71,1.7-1.1,1.83ZM207.71,235.51c0-.14-1.53.6.37-1.83,1.32.71.31.62-.37,1.83ZM208.26,232.21c.23-.03.48-.04.55.18.31,1.05-2.22.05-.55-.18ZM209.73,237.35c-1.28.06.38-2.73.73-2.57.5.23-.36,2.55-.73,2.57ZM210.65,233.5c-1.49,1.07-.91-.87-.18-.92.81-.06.22.89.18.92ZM210.46,231.48c-.28-.12-.31-.88,0-1.1.79-.57.45,1.3,0,1.1ZM212.3,234.78c-.58-.26.14-1.55.37-1.47.58.21-.14,1.57-.37,1.47ZM212.3,232.21c-.87-.61.77-1.85,1.1-1.83,1.05.05-.2,2.46-1.1,1.83Z"
                    />
                    <path
                      className=""
                      d="M120.62,156.67c.24.04,3.48,3.24,3.48,3.48,0,.37-4.15,4.76-4.58,5.68-.79-.88-4.09-4.21-3.85-5.32.07-.31,4.64-3.9,4.95-3.85Z"
                    />
                    <path
                      className=""
                      d="M104.12,100.93c3.27.46-6.37,11.71-6.23,12.84-2.72-4.17-.16-3.14.92-4.95.62-1.04,4.27-8.03,5.32-7.88Z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      className=""
                      d="M89.45,55.09c8.21-1.3,8.02,10.1,1.83,10.63-5.34.46-6.09-9.96-1.83-10.63Z"
                    />
                    <g>
                      <path
                        className=""
                        d="M211.75,40.6c-5.76-7.24-16.85-8.34-16.87-9.53-.03-1.73,3.79,1.27,1.83-4.4-1.19-3.44-5.6-7.78-8.43-10.08-8.56-6.94-19-9.87-30.07-8.07-9.53,1.55-25.86,14.38-13.2,2.75-12.58-11.16-35.32-10.18-48.59-.92-3.81,2.66-11.2,11.01-5.5,9.53.89-.23,6.61-8.63,14.85-10.27,3.8.52-5.57,2.33-9.17,6.78-.26.32,1.3.64-1.83,2.57,5.27,2.36,8.12-4.17,13.2-4.22-.02.08,1.33.34.18,1.1-1.09.16-4.09,1.32-4.77,1.83-5.72,4.36,7.2-.35,7.15.55,0,.13-2.22.77-.92,1.65,2.6-.04,7.23.57,9.17,2.2-18.45-2.27-39.01-1.49-55.19,8.07-3.33,1.97-5.88,3.1-8.43,6.23-5.64,6.92-9.36,20.12-2.93,27.32-3.7,2.87-7.39,5.57-10.63,8.98-2.37,2.49-2.96,3.35-4.77,6.23-.14.22-2.01,1.85-2.93,4.22-5.85,15.01,4.1,32.07,16.32,33.19,6.36.58,10.38-3.94,9.72-.55-.39,1.96-5.53-.51-5.13,10.63.42,11.83,10.82,23.55,23.29,18.52,1.06-.43,7.7-5.07,8.43-5.87,5.7-6.18,4.37-19.48,3.12-27.32,10.75-8,8.09-26.16,11.55-26.95,2.47.55,4.11,5.34,7.7,6.97,6.09,2.76,20.5.59,26.04-2.93,7.48-4.76,7.58-12.88,8.8-13.2,4.08,3.18,12.2,6.28,17.24,5.87,6.12-.5,13.27-8.02,12.29-14.49l.92-1.28c4.06-.37,6.97-1.46,11.37-1.1,6.01.49,15.58,4.64,19.07,9.9,11.01-6.73,15.43-23.51,7.15-33.92ZM47.46,87.36c-1.49,2.22-4.06,2.73-.73,4.4-6.61,2.37-3.12-6.29.73-4.4ZM42.14,104.6c.72.93,2.78,2.49,3.12,3.12,1.76,3.29-4.7-2.01-3.12-3.12ZM37.74,84.06c5.74-.98.45,10.23-1.1,10.63-4.95,1.31-2.63-10,1.1-10.63ZM36.64,102.39c3.4.08,1.5,3.26,6.6,6.97,2.14,1.56,5.81,2.23,5.68,3.12-.47,3.35-11.52-4.2-12.29-10.08ZM46.17,105.33c.99,1.33,2.8,2.33,3.12,2.75,4.52,5.99-1.87,5.07-3.12-2.75ZM86.7,85.16c-4.67,10.03-11.31-4.7-4.03-5.87-4.49,3.92-.92,11.91,4.03,5.87ZM84.86,79.29c1.41-.23,1.67.82,2.2,1.83-.32,1.01-2.24-1-2.2-1.83ZM63.59,32.35c1.63-.3,3.61-1.85,6.6-.73,1.95,5.84-16.13,8.37-6.6.73ZM52.59,57.11c-4.13-6.93-.5-14.76,1.65-14.49,2.08.27-1.82,5.6-2.02,6.78-1.88,11.58,5.95-4.68,6.23-.37.02.31-2.11,1.4-2.93,2.57-5.63,8,4.58-.52,4.03,1.47-3.32,1.06-11.16,13.43-6.97,4.03ZM59.19,94.51c.2,12.28-3.19-1.68,1.1-5.87-6.61-9.34-6.74-23.67-.73-33.37,4.34-7,10.76-7.5,18.15-9.35,7.73-13.24,8.53-10,0,2.2-2.65.81-5.27,1.23-7.88,2.2-11.79,4.37-13.75,18.59-11,29.7.22.88,1.86,6.36,2.75,6.23.16-.02,1.7-2.16,1.65-2.75-.04-.44-2.21-2.96-2.57-3.85-.31-.78-.62-1.57.37-1.83,2.28,5.16,5.15,4.36,4.77,1.65-.02-.17-2.22-2.57-1.28-3.12.25-.15,4.1,4.11,4.58.92.07-.46-4.96-4.82.92-.92,2.59-3.32.33-1.39,3.67-1.47.18,0,1.67-1.67,3.12.18-11.25,4.37-9.47,7.89-9.9,8.43-2.79,3.56-6.42,6.36-7.7,11ZM71.3,129.17c-2.42,1.52-2.25-6.75,2.57-6.23.97.1.66.3.73.37.01.6-.6.27-1.1.37-2.88.57-3.21,3.13-2.2,5.5ZM63.78,100.19l.18,9.35c9.68-1.62,11.33,7.11,9.35,7.15-1.25-4.96-6.34-7.5-10.63-4.4l-.55-.55c2.29-1.93-1.51-6.08,1.65-11.55ZM80.65,137.23c-.98.87-2.28,1.98-2.57,3.3-2.61.46-5.01,1.83-6.97,3.67-5.58-.41-12.6-5.85-14.12-11.18-1.15-4.05.49-6.83.37-2.2,3.31.54,1.21,1.7,1.83,3.3.28.72,1.3.43,1.47.73,2.16,3.87,1.73,2.04,2.02,2.38.24.29,2.18,5.08,5.32,4.4-.74-1.14.59-1.18.37.37,2.07.55,3.05.55,4.77-.92-.02-.58-10.17-3.03-8.98-5.68,2.54,3.22,7.97,4.15,12.1,4.03,3.59-3.7-.23-1.48-3.67-2.93-5.67-2.4,6.05-.28,6.6-.37,4.9-.78-1.95-2.33-.73-2.93,4.53.73,6.01-2.69,7.15-1.28-2.51,4.74-4.65,5.05-4.95,5.32ZM89.81,102.76c-6.04,3.32-7.68-5.66-1.28-5.5-9.22,7.09,7.63,5.18,1.83-1.47,3-1.2,2.99,5.03-.55,6.97ZM92.01,67.19c-8.54,1.59-8.84-12.25-3.67-13.57,10.43-2.67,11.79,12.06,3.67,13.57ZM110.53,39.14c-1.48.36-1.27-2.05-2.93-.18-2.62,2.94.99,5.84,4.4,3.12.25-.34-.51-.71-.37-.92,2.84-4.14,4.33,2.98-1.65,3.3-8.36.44-2.56-12.6.55-5.32ZM118.05,66.46c-1.34.27-1.92-8.11-9.9,0-1.11-.77,3.35-4.56,4.77-4.77,4.26-.62,6.84,4.42,5.13,4.77ZM147.02,33.82c2.14-.18-.24,2.69.37,5.13-2.76-6.31-14.07-5.68-13.94,1.83-4.11-.48-7.74,1.77-9.9,5.13-1.63.2,1.58-6.76,8.43-6.23-.42-3.04,3.64-5.87,6.23-6.23,4.84-.69,6.95,1.85,7.33,1.83.19,0,1.27-1.45,1.47-1.47ZM131.07,23.37c.95-1.97,5.04-3.37,7.15-3.85,5.94,1.34.03.74-2.57,1.83-1.83.77-6.82,6.65-4.58,2.02ZM125.94,8.88c4.91.82-6.8,0-2.57,5.5-4.98-3.21-.37-4.6,2.57-5.5ZM122.64,76.36s-.93.05-1.1-.55c-.38-1.38,1.32-4.29,3.67-4.95.6-.13,1.6.4,2.02.73,4.11,3.3-2.68-1.4-4.58,4.77ZM135.29,52.89c-6.73.58-9.6,4.14-11.37,10.27-1.15-5.93,4.04-11.5,9.9-11.37.8-.43,1.2-6,7.7-6.6,2.64-.24,7.74.85,9.35,3.12,3.83,5.37-2.88-1-4.22-1.28-4.78-1-10.49.5-11.37,5.87ZM150.14,71.04c-.7-3.34,3.54,2.71,6.42-.18.49-.5.59-.49.55-1.28-.14-2.52-3.12,1.21-3.3-1.1-.05-.68,1.89-1.65,2.02-1.65.82-.02,2.21,1.27,2.38,2.02,1.24,5.34-7.61,4.41-8.07,2.2ZM164.26,47.02c-1.63-1.19-4.07-1.28-4.03-2.2,5.82-.79,15.3,9.96,11.92,11.18,2.21,11.01-.88-3.85-7.88-8.98ZM161.14,27.03c.48-2.58,6.16-3.57,8.25-3.12.91.2,1.55,1.41,1.65,1.47-11.87-1.4-10.33,6.93-1.65,5.5,3.22-.53,3.31-1.83,3.12-4.77,6.96,7.01-12.76,8.47-11.37.92ZM211.93,61.32l.18.55-.55.18-.18-.18.55-.55ZM178.74,39.87c4.93-7.39,14.14-3.09,14.85-3.48.13-.07.26-2.18,1.47-2.57,7.17-2.32,23.1,16.91,6.23,2.2-11.81-3.32-3.6,2.92-3.48,3.48.8,3.8-2.78-3.31-10.82-2.38-4.68.54-13.53,10.67-8.25,2.75ZM195.98,56.92c-.7.61-2.15.42-2.2-.73.12,0,.93-.69,2.2.73ZM188.64,60.04c-1-2.14.98-2.47,2.2-3.12.9,1.05-1.49,1.48-1.1,2.75.39,1.29,3.06.91,4.03.18,3.33,2.08-3.78,3.08-5.13.18ZM205.33,71.96c-1.96-.72-1.49-2.23-4.03-4.03-1.74-1.24-5.07-2.16-7.15-2.75,3.68-1.16,5.75-4.06,6.05-3.85,1.05.73-1.23,2.8-.92,3.48,1.24,2.66,10.21-11.23,6.23-3.3-.43.86-7.37,7.53-.92,4.95,4.08-1.63,3.89-8.43,4.4-8.43.11,0,.38,1.1.73,1.1.95,0,.97-3.99,2.02-3.67,0,.12,0,.24,0,.37.08,6.36-14.2,20.06-1.47,10.08l-4.95,6.05ZM211.2,64.26c-.28-.12-.31-.88,0-1.1.79-.57.45,1.3,0,1.1Z"
                      />
                      <path
                        className=""
                        d="M38.47,85.16c3.27.04-.95,6.65-2.2,7.7-1.79-1.56.54-7.72,2.2-7.7Z"
                      />
                    </g>
                  </g>
                  <path
                    className=""
                    d="M66.34,32.72c6.51-.86-2.85,4.37-3.48,2.38-.27-.83,2.94-2.31,3.48-2.38Z"
                  />
                </g>
              </g>
              <g>
                <path
                  className=""
                  d="M164.26,130.46c0-1.11-.9-2.01-2.01-2.01s-2.01.9-2.01,2.01.9,2.01,2.01,2.01,2.01-.9,2.01-2.01Z"
                />
                <path
                  className=""
                  d="M180.94,109c-.82-3.8-1.69-5.67-4.77-8.07-1.72-1.34-1.92-1.82-4.4-2.2-1.22-.19-5.37.03-6.97.37-10.4,2.19-12.74,18.75-8.98,27.14.68-1.62,1.34-3.03,2-4.27,1.39-4.1,3.8-8.2,7.72-6.83,9.06,3.15,6.7,20.82,6.04,24.85,1.59-.2,4.07-.78,7.9-1.83,2.73-8.27,3.28-20.78,1.47-29.15Z"
                />
                <path
                  className=""
                  d="M166.7,117.33c-1.18.22-1.81,2.18-1.4,4.36s1.7,3.78,2.89,3.56c1.18-.22,1.81-2.18,1.4-4.36-.41-2.19-1.7-3.78-2.89-3.56Z"
                />
              </g>
              <g>
                <path
                  className=""
                  d="M124.15,116.63c-1.34.4-1.81,2.81-1.04,5.39.77,2.57,2.48,4.34,3.83,3.93s1.81-2.81,1.04-5.39c-.77-2.57-2.48-4.34-3.83-3.93Z"
                />
                <path
                  className=""
                  d="M121.41,133.58c0,.97.79,1.76,1.76,1.76s1.76-.79,1.76-1.76-.79-1.76-1.76-1.76-1.76.79-1.76,1.76Z"
                />
                <path
                  className=""
                  d="M128.55,125.47c-.89.27-1.25,1.71-.8,3.22.45,1.51,1.54,2.52,2.43,2.26.89-.27,1.25-1.71.8-3.22s-1.54-2.52-2.43-2.26Z"
                />
                <path
                  className=""
                  d="M147.57,123.48c-.48-4.51-5.4-17.44-8.98-19.99-.94-.67-2.74-1.12-3.85-1.47-7.89-2.45-17.7.18-22.74,6.97-4.07,5.49-1.98,14.83-.82,21.32,1.28-6.38,4.58-17.44,11.99-15.69,9.06,2.14,9.16,20.13,9.05,24.49,3.32,1.23,7.02,3.19,8.56,5.82,4.66-7.74,7.8-12.01,6.78-21.45Z"
                />
                <path
                  className=""
                  d="M122.71,137.23c0,.61.49,1.1,1.1,1.1s1.1-.49,1.1-1.1-.49-1.1-1.1-1.1-1.1.49-1.1,1.1Z"
                />
              </g>
            </g>
          </g>
        </svg>
        <svg fill="#171717" viewBox="0 0 405.15 62.82" height={100}>
          <g>
            <path d="M62.6,57.91c-1.51,6.34-7.92-2.09-6.26-8.42,1.8-6.98,5.47-17.07,10.01-24.91,5.04-8.79,10.01,5.76,7.92,8.21-4.32,5.04-9.65,16.71-11.67,25.13ZM80.17,17.73c-4.9,0-7.63-2.45-7.42-7.56.14-4.32,3.24-7.78,6.7-7.63,3.74.22,4.32,3.1,4.75,6.55.36,3.02-.58,8.64-4.03,8.64Z" />
            <path d="M139.12,57.91c-1.51,6.34-7.92-2.09-6.26-8.42,1.8-6.98,7.47-19.07,12.01-26.91,5.04-8.79,10.01,5.76,7.92,8.21-4.32,5.04-11.65,18.71-13.67,27.13ZM156.69,16.73c-4.9,1-6.63-2.45-6.42-7.56.14-4.32,3.24-7.63,6.7-7.63,4.79,0,4.32,4.1,4.75,7.55.36,3.02-1.65,6.95-5.03,7.64Z" />
            <path d="M266.35,28.98c4.18,1.87,6.34,4.97,7.7,9.72,2.16,7.7-15.91,15.05-23.62,17.64-2.59.86-11.74,3.6-19.08,4.03-3.96.29-10.22-6.55-9.5-10.44.94-5.18,7.34-20.31,14.69-29.16.72-.94,2.02-3.17,2.81-4.03-1.08-2.81-.22-6.48,3.31-7.27,7.13-1.66,12.75-1.8,20.31-1.8,5.18,0,9.79,2.23,13.32,8.64,2.3,4.32-3.67,9.07-9.94,12.67ZM261.09,36.54c-3.67-1.22-6.98-.22-10.44-.65-6.19,2.23-11.95,3.89-15.27,4.97-1.3,2.66-2.59,5.33-3.89,9.07,6.34-.14,29.02-6.12,32.11-11.52.36-.72.43-.94-2.52-1.87ZM265.05,16.74c-4.46,0-9.86.43-13.97,1.58-2.81,3.31-5.62,7.34-7.71,9.94,1.66-.58,4.1-.94,5.9-1.73,5.54-2.3,13.54-5.4,18-9.58-.86-.14-1.66-.22-2.23-.22Z" />
            <path d="M104.68,44.09c-4.52.53-7.11-6.12-4.8-10.79,5.71-11.46,21.36-27.9,23.58-29.72,1.07-.88,2.19-1.68,3.4-2.89,2.96-2.91,9.88,4.13,6.83,7.09-2.24,2.25-4.95,3.97-7.13,6.31-5.49,5.84-10.24,11.32-14.66,18.05,8.6-1,6.88-.62,15.53.6,6.36.89,7.45,10.09,1.02,9.19-10.93-1.55-13.07,1.02-23.76,2.16Z" />
            <path d="M79.35,61.89c-4.32,1.44-8.21-4.54-6.91-9.58,3.24-12.39,15.19-31.68,16.99-33.92.86-1.08,1.8-2.09,2.74-3.53,2.3-3.46,10.51,2.02,8.14,5.54-1.73,2.66-4.03,4.9-5.69,7.63-4.18,6.84-7.7,13.18-10.66,20.67,8.21-2.74,13.61-2.02,22.32-2.59,6.41-.43,9.36,8.35,2.88,8.79-11.02.72-19.59,3.67-29.81,6.98Z" />
            <path d="M172.41,62.82c-8.06,0-19.66-6.19-19.95-14.98-.5-14.11,8.71-24.63,19.37-33.05,13.75-10.8,19.51-2.95,23.76,5.98,2.81,5.98-2.81,7.99-7.7,3.53-2.88-2.59-1.01-6.41-9.14,0-8.35,6.55-16.27,15.19-15.91,26.21.07,2.45,3.82,3.1,5.69,3.1,7.92,0,16.85-6.19,22.54-12.24-6.41,0-7.42.72-12.82,1.08-6.48.43-11.45-7.06-5.11-8.21,6.48-1.22,16.85-2.95,24.12-3.38,3.17-.14,10.08,5.26,7.42,10.01-6.34,11.09-19.73,21.96-32.26,21.96Z" />
            <path d="M46.85,34.14c3.92,2.36,5.7,5.69,6.49,10.57,1.22,7.91-17.6,13.04-25.56,14.69-2.68.55-12.08,2.17-19.43,1.72-3.97-.19-9.37-7.73-8.19-11.5,1.55-5.04,9.72-19.28,18.07-27.2.83-.84,2.38-2.91,3.27-3.67-2.94-1.83-6.36-6.75,4.16-6.83,7.28-.79,12.87-.26,20.38.64,5.15.62,9.46,3.39,12.19,10.17,1.77,4.56-4.73,8.57-11.38,11.39ZM40.73,41.02c-2.51-1.19-4.98-1.21-7.42-1.44-2.22-.21-4.45-.08-6.63.37-4.91,1.02-9.25,1.74-11.99,2.29-1.6,2.49-3.21,4.98-4.94,8.54,6.31.61,29.54-2.61,33.26-7.6.44-.67.54-.88-2.28-2.16ZM47.02,21.83c-4.43-.53-13.28-1.02-17.49-.37-3.18,2.95-5.42,7.25-7.81,9.58,1.71-.37,7.05.55,8.94-.02,10.3-.43,13.62-5.09,18.55-8.7-.84-.25-1.62-.41-2.19-.48Z" />
            <path d="M347.5,39.86c5.33,2.66,8.01,5.98,10.24,7.78,5.04,3.96,5.37,12.15-.25,9.27-5.54-2.88-18.7-9.05-27.13-11-2.09,5.62-3.17,8.35-4.54,13.03-1.87,6.12-9.5-4.25-7.7-10.37,3.38-11.45,6.91-19.73,13.54-28.8-2.74-2.02-1.37-7.85,3.74-9,3.1-.65,4.75-.94,7.92-.94,6.84,0,25.56,3.89,26.35,12.24.79,9.14-12.75,14.47-22.18,17.79ZM343.9,20.06c-3.02,3.46-5.69,7.99-8.06,12.96,6.7-1.8,18.22-6.91,21.82-9,.94-.58,1.94-1.15,2.88-1.94-4.46-1.8-10.8-1.94-16.63-2.02Z" />
            <path d="M404.26,24.7c-3.68,1.28-5.36-4.4-8.96-4.4-1.84,0-10.32,3.68-10.32,5.2,7.76,1.76,17.21.88,19.45,7.92,1.28,4-2.16,14.8-8.32,18.25-2.96,1.68-12.8,7.12-17.05,7.12-10.56,0-10.8-8.64-14.25-13.68-.8-1.2-1.84-6,1.04-7.28.4-.16.64-.32.88-.32.48,0,1.04.8,3.12,3.92,2.8,4.08,5.36,5.76,12.08,4.64,2.56-.4,14.89-5.92,13.6-8.32-.8-1.44-12.88-1.76-18.01-.88-2.64.4-7.84-6.64-6.08-10.08,1.76-3.44,5.84-7.84,9.12-10.24,7.52-5.36,11.6-7.28,16.25-7.28,5.52,0,6.72,7.6,8.24,12.24.16.56.24,2.88-.8,3.2Z" />
            <g>
              <path d="M313.22,38.13c3.1,1.1,2.86,4.93-.67,5.66-.43,4.44-.61,8.95-.67,13.33-.12,5.48-8.83-.3-8.34-5.72.18-2.43.3-4.75.36-7-6.94.85-14.67,2.68-20.94,4.57-1.83,2.56-3.23,5.24-4.38,7.73-2.31,5.11-7.18-1.7-5.11-6.7,5.11-12.48,20.21-27.7,32.75-34.21,4.2-2.19,10.84,3.23,9.8,7.85-1.22,5.36-1.95,8.65-2.8,14.49ZM292.34,38.07c3.96-.3,7.91-.36,11.87-.3.24-3.59.67-7.18,1.52-11.08-4.99,2.98-9.13,6.39-13.39,11.38Z" />
              <path d="M320.9,13.67c-1.74.67-4.58.41-4.96-2.3-.24-1.92,1.61-5.68,2.54-7.01,1.02-1.5,4.52-2.87,6.15.59,1.09,2.3-.81,7.59-3.73,8.72Z" />
              <path d="M305.64,10.79c-1.96,1.02-4.64,1.02-5.71-1.29-.73-1.66.93-4.66,1.69-6.01.82-1.51,3.63-4.32,6.55-1.56,1.78,1.75.54,7.26-2.53,8.87Z" />
            </g>
          </g>
        </svg>
      </div>
    ),
    { ...size }
  )
}