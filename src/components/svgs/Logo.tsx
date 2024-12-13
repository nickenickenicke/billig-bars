interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <svg
      data-name="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 385.98 62.82"
      className={className}
      width={width}
      height={height}
    >
      <g data-name="logo-layer">
        <path d="M62.6,57.91c-1.51,6.34-7.92-2.09-6.26-8.42,1.8-6.98,5.47-17.07,10.01-24.91,5.04-8.79,10.01,5.76,7.92,8.21-4.32,5.04-9.65,16.71-11.67,25.13ZM80.17,17.73c-4.9,0-7.63-2.45-7.42-7.56.14-4.32,3.24-7.78,6.7-7.63,3.74.22,4.32,3.1,4.75,6.55.36,3.02-.58,8.64-4.03,8.64Z" />
        <path d="M285.04,55.11c-2,6.2-13.52,7.87-9.52-5.26,2.1-6.9,5.03-18.71,9.24-26.74,3.36-6.47,8.89-2.16,10.39,1.43.65,1.57-.31,3-1.08,4.51-7.03,13.81-6.43,18.04-9.02,26.06ZM296.56,2.03c4.8.99,6.84,2.62,5.59,7.58-1.02,4.2-4.75,6.96-8.1,6.12-3.62-.97-3.6-3.91-3.33-7.38.26-3.03,2.45-7.02,5.84-6.32Z" />
        <path d="M139.12,57.91c-1.51,6.34-7.92-2.09-6.26-8.42,1.8-6.98,7.47-19.07,12.01-26.91,5.04-8.79,10.01,5.76,7.92,8.21-4.32,5.04-11.65,18.71-13.67,27.13ZM156.69,16.73c-4.9,1-6.63-2.45-6.42-7.56.14-4.32,3.24-7.63,6.7-7.63,4.79,0,4.32,4.1,4.75,7.55.36,3.02-1.65,6.95-5.03,7.64Z" />
        <path d="M373.21,56.81c-.42,1.09-.76,1.43-1.43,2.02-3.54,3.03-6.91,1.18-8.51-2.61-4.63,2.53-10.53,4.97-16.26,4.97-4.21,0-9.27-5.14-9.1-9.94.17-4.89.67-7.33,4.13-13.9,3.87-7.35,12.05-8.89,17.83-7.92.87.15,1.7.44,2.48.85,2.41,1.25,5.62,2.74,7.6,3.99,1.77-2.78,3.13-5.73,4.73-8.76,2.53-4.72-9.47-4.92-13.6-3.07-3.79,1.77-7.33,3.62-7.5,0-.17-2.19,3.79-5.56,7.67-8.09,4.8-3.12,11.33-3.53,16.59-1.61,5.75,2.1,9.72,11.79,7.53,16.34-7.33,15.16-8.96,18.38-12.16,27.74ZM354.59,39.79c-3.88,1.69-9.44,6.07-8.93,9.69.51,3.12,11.32-1.08,18.23-4.53.08-.34.56-1.7.73-2.04-2.95-1.68-7.25-4.38-10.03-3.12Z" />
        <path d="M266.35,28.98c4.18,1.87,6.34,4.97,7.7,9.72,2.16,7.7-15.91,15.05-23.62,17.64-2.59.86-11.74,3.6-19.08,4.03-3.96.29-10.22-6.55-9.5-10.44.94-5.18,7.34-20.31,14.69-29.16.72-.94,2.02-3.17,2.81-4.03-1.08-2.81-.22-6.48,3.31-7.27,7.13-1.66,12.75-1.8,20.31-1.8,5.18,0,9.79,2.23,13.32,8.64,2.3,4.32-3.67,9.07-9.94,12.67ZM261.09,36.54c-3.67-1.22-6.98-.22-10.44-.65-6.19,2.23-11.95,3.89-15.27,4.97-1.3,2.66-2.59,5.33-3.89,9.07,6.34-.14,29.02-6.12,32.11-11.52.36-.72.43-.94-2.52-1.87ZM265.05,16.74c-4.46,0-9.86.43-13.97,1.58-2.81,3.31-5.62,7.34-7.71,9.94,1.66-.58,4.1-.94,5.9-1.73,5.54-2.3,13.54-5.4,18-9.58-.86-.14-1.66-.22-2.23-.22Z" />
        <path d="M104.68,44.09c-4.52.53-7.11-6.12-4.8-10.79,5.71-11.46,21.36-27.9,23.58-29.72,1.07-.88,2.19-1.68,3.4-2.89,2.96-2.91,9.88,4.13,6.83,7.09-2.24,2.25-4.95,3.97-7.13,6.31-5.49,5.84-10.24,11.32-14.66,18.05,8.6-1,6.88-.62,15.53.6,6.36.89,7.45,10.09,1.02,9.19-10.93-1.55-13.07,1.02-23.76,2.16Z" />
        <path d="M79.35,61.89c-4.32,1.44-8.21-4.54-6.91-9.58,3.24-12.39,15.19-31.68,16.99-33.92.86-1.08,1.8-2.09,2.74-3.53,2.3-3.46,10.51,2.02,8.14,5.54-1.73,2.66-4.03,4.9-5.69,7.63-4.18,6.84-7.7,13.18-10.66,20.67,8.21-2.74,13.61-2.02,22.32-2.59,6.41-.43,9.36,8.35,2.88,8.79-11.02.72-19.59,3.67-29.81,6.98Z" />
        <path d="M172.41,62.82c-8.06,0-19.66-6.19-19.95-14.98-.5-14.11,8.71-24.63,19.37-33.05,13.75-10.8,19.51-2.95,23.76,5.98,2.81,5.98-2.81,7.99-7.7,3.53-2.88-2.59-1.01-6.41-9.14,0-8.35,6.55-16.27,15.19-15.91,26.21.07,2.45,3.82,3.1,5.69,3.1,7.92,0,16.85-6.19,22.54-12.24-6.41,0-7.42.72-12.82,1.08-6.48.43-11.45-7.06-5.11-8.21,6.48-1.22,16.85-2.95,24.12-3.38,3.17-.14,10.08,5.26,7.42,10.01-6.34,11.09-19.73,21.96-32.26,21.96Z" />
        <path d="M46.85,34.14c3.92,2.36,5.7,5.69,6.49,10.57,1.22,7.91-17.6,13.04-25.56,14.69-2.68.55-12.08,2.17-19.43,1.72-3.97-.19-9.37-7.73-8.19-11.5,1.55-5.04,9.72-19.28,18.07-27.2.83-.84,2.38-2.91,3.27-3.67-2.94-1.83-6.36-6.75,4.16-6.83,7.28-.79,12.87-.26,20.38.64,5.15.62,9.46,3.39,12.19,10.17,1.77,4.56-4.73,8.57-11.38,11.39ZM40.73,41.02c-2.51-1.19-4.98-1.21-7.42-1.44-2.22-.21-4.45-.08-6.63.37-4.91,1.02-9.25,1.74-11.99,2.29-1.6,2.49-3.21,4.98-4.94,8.54,6.31.61,29.54-2.61,33.26-7.6.44-.67.54-.88-2.28-2.16ZM47.02,21.83c-4.43-.53-13.28-1.02-17.49-.37-3.18,2.95-5.42,7.25-7.81,9.58,1.71-.37,7.05.55,8.94-.02,10.3-.43,13.62-5.09,18.55-8.7-.84-.25-1.62-.41-2.19-.48Z" />
        <path d="M322.15,39.86c5.33,2.66,8.01,5.98,10.24,7.78,5.04,3.96,5.37,12.15-.25,9.27-5.54-2.88-18.7-9.05-27.13-11-2.09,5.62-3.17,8.35-4.54,13.03-1.87,6.12-9.5-4.25-7.7-10.37,3.38-11.45,6.91-19.73,13.54-28.8-2.74-2.02-1.37-7.85,3.74-9,3.1-.65,4.75-.94,7.92-.94,6.84,0,25.56,3.89,26.35,12.24.79,9.14-12.75,14.47-22.18,17.79ZM318.55,20.06c-3.02,3.46-5.69,7.99-8.06,12.96,6.7-1.8,18.22-6.91,21.82-9,.94-.58,1.94-1.15,2.88-1.94-4.46-1.8-10.8-1.94-16.63-2.02Z" />
      </g>
    </svg>
  )
}
