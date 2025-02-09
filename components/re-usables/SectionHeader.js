import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

const SectionHeader = ({
  title,
  seeMoreLink = '',
}) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            border: 'solid',
            borderRight: 'none',
            borderTop: 'none',
            borderBottom: 'none',
            borderLeftColor: '#FFBB35',
            mb: 2,
            padding: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '18px',
              textTransform: 'uppercase',
              ml: 1,
              color: 'white'
            }}
          >
            {title}
          </Typography>
        </Box>
        {seeMoreLink && (
          <Box>
            <NextLink href={seeMoreLink}>
              <Button
                variant="outlined"
                sx={{
                  color: '#3FC79A',
                  border: '1px solid #3FC79A',
                  textTransform: 'uppercase',
                  padding: 1,
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '0.1px',
                }}
              >
                see more
              </Button>
            </NextLink>
          </Box>
        )}
      </Box>
      <Divider />
    </Box>
  );
};

export default SectionHeader;