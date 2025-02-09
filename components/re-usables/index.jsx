'use client';

import React from 'react';

import { Box, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function CompetitionCard({competitionData}) {



  return (
    <Card
      sx={{
        backgroundColor: 'background.card',
        m: 1,
        width: { xs: '100% important' },
        height: 160,
      }}
    >
      <CardContent
        sx={{
          paddingBlock: '12px !important',
          padding: '32px 15px; !important',
        }}
      >
        <Typography>
          {competitionData.heading}
        </Typography>
        <Typography>
          {competitionData.subHeading}
        </Typography>
      </CardContent>
    </Card>
  );
}