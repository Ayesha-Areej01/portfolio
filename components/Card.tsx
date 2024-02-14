import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function CardWithForm(props:{
    title:string;
    description:string;}) 
{
  return (
    <Card className="w-[350px] bg-blue-950 text-white">
      <CardHeader>
        <CardTitle className="">{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
      <CardDescription className='flex item-center justify-center font-bold text-blue-400'>{props.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
