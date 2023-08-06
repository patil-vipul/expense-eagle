import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


export default function BalanceCard({className}) {
  return (
    <Card variant="outlined" className={`${className}`}>
       <CardContent className="!pb-4">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Balance
        </Typography>
        <Typography fontWeight={500} variant="h5" component="div">
          $6000
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
