export interface Triangle {
    base: number;
    height: number;
  }
  
  export interface Rectangle {
    length: number;
    width: number;
  }
  
  export interface Sphere {
    radius: number;
  }
  
  export interface GeometryResponse {
    area?: number;       // for triangle area
    perimeter?: number;  // for rectangle perimeter
    volume?: number;     // for sphere volume
  }
  