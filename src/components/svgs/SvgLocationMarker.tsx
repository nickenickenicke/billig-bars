interface SvgLocationMarkerProps {
  width?: number
  height?: number
  className?: string
}

export const SvgLocationMarker = ({ width, height, className }: SvgLocationMarkerProps) => {
  return (
    <svg
      data-name="location-marker"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 292 444"
      className={className}
      width={width}
      height={height}
      role="img"
    >
      <g id="location_marker-c" data-name="location-marker">
        <path
          className=""
          d="M144.24,0C64.58,0,0,64.58,0,144.24s117.32,299,144.24,299,144.24-219.34,144.24-299S223.9,0,144.24,0ZM144.24,204.22c-33.13,0-59.98-26.85-59.98-59.98s26.85-59.98,59.98-59.98,59.98,26.85,59.98,59.98-26.85,59.98-59.98,59.98Z"
        />
      </g>
    </svg>
  )
}
