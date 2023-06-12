const SVGComponent = (props) => (
  <svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {`\n\t.st0{fill:none;stroke:#752DF9;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\n`}
    </style>
    <path
      className="st0"
      d="M3,6v15c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.9,4,3,4.9,3,6z"
    />
    <line className="st0" x1={3} y1={19} x2={29} y2={19} />
    <line className="st0" x1={9} y1={29} x2={23} y2={29} />
    <path className="st0" d="M13,23c0,2.1-0.7,4.6-1.8,6" />
    <path className="st0" d="M20.8,29c-1.1-1.4-1.8-3.9-1.8-6" />
    <polyline className="st0" points="7,9 10,12 7,15 " />
    <line className="st0" x1={13} y1={15} x2={17} y2={15} />
  </svg>
);
export default SVGComponent;
