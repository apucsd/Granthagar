// In a file, for example, custom.d.ts
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": any;
    }
  }
}
