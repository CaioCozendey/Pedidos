'use client'

// import { Alert } from "@material-tailwind/react";
// import { useState } from "react";

// export default function Example() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="absolute mt-4 w-2/6 flex-col gap-2">
//       <Alert color="blue" open={open} onClose={() => setOpen(false)}>
//         <p className="items-center">
//           Tempo de entrega 50min
//         </p>
//       </Alert>
//     </div>
//   );
// }

import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <div className="absolute w-auto xl:w-1/6">
      <Fragment>
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          Tempo de Entrega 45 min
        </Alert>
      </Fragment>
    </div>

  );
}