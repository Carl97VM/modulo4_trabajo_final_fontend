import React from 'react'
import { News } from '../types/News'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from '@mui/material'
import Image from 'next/image'

interface NewsListProps {
  news: News[]
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <Grid container spacing={2}>
      {news.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardActionArea>
              <Image
                src={`https://picsum.photos/200/100?random=${item.id}`}
                alt={item.title}
                width={200}
                height={100}
                layout="responsive"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsList
