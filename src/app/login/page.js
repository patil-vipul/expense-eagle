import Image from "next/image";

import Button from "@mui/material/Button";
import { Fab, IconButton, TextField, Typography } from "@mui/material";

export default function Page() {
  return (
    <main className="w-full h-full">
      <div className="h-full flex flex-col justify-between">
        <div className="px-7 mt-10">
          <Typography variant="h4" fontWeight={600} className="text-orange-600">
            Expense Eagle
          </Typography>
        </div>
        <div className="px-7">
          <Typography variant="h4">Hello there!</Typography>
          <Typography variant="h4">Welcome Back</Typography>
        </div>
        <div>
          <div className="px-7 mt-4 mb-4">
            <TextField
              className="w-full mb-5"
              label="Email Address"
              variant="standard"
              size="medium"
            />
            <TextField
              type="password"
              className="w-full"
              label="Password"
              variant="standard"
            />
          </div>
          <Typography
            align="right"
            className="text-orange-600 px-7 text-sm font-semibold mb-9"
          >
            Forgot your password?
          </Typography>

          <div className="px-7">
            <Button
              fullWidth
              className="bg-orange-600 text-white font-semibold"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="flex justify-between px-7 mb-10">
          <Typography className="text-stone-500 font-semibold">Don&apos;t have an account? <span className="text-black">Register</span> </Typography>
          <Typography className="text-stone-500 font-semibold">Terms</Typography>
        </div>
      </div>
    </main>
  );
}
