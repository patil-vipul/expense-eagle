import Image from "next/image";

import Button from "@mui/material/Button";
import { Fab, IconButton, Typography } from "@mui/material";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import { Add } from "@mui/icons-material";
import BottomNavbar from "../components/BottomNavbar";

export default function Page() {
  return (
    <main className="w-full h-full">
      <div className="h-full">
        <div className="flex justify-between items-center mb-4 pt-6 px-6">
          <Typography variant="h5" component="div">
            Hi, Bruce
          </Typography>
          <IconButton className="w-8 h-8">B</IconButton>
        </div>
        <div className="px-6">
          <BalanceCard className="mb-4" />
        </div>

        <div className="flex justify-between items-center px-6">
          <Typography>Transactions</Typography>
          <Button>View All</Button>
        </div>
        <div className="px-2">
          <TransactionList />
        </div>
        <Fab color="primary"  className="absolute bottom-16 right-4 bg-orange-600" aria-label="add">
          <Add/>
        </Fab>
        <BottomNavbar/>
      </div>
    </main>
  );
}
