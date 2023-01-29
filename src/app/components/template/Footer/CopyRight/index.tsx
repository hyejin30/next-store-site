import { Typography } from '@mui/material';
import { fontSize } from '@/styles';

function CopyRight() {
  return (
    <Typography component="span" sx={{ fontWeight: 300, fontSize: fontSize.small }}>
      © 2023 HYEJIN KIM
    </Typography>
  );
}

export default CopyRight;
