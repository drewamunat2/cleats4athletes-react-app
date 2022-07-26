import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Cleats4Athletes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Header() {
  return (
    <Toolbar>
      <CameraIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        Album layout
      </Typography>
    </Toolbar>
  );
}

const cards = [1, 2, 3];


export default function Album() {
  return (
    <>
      <AppBar position="relative">
        <Header />
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="success.main"
              gutterBottom
            >
              Every Step Counts
            </Typography>
            <img align="center" alt="c4a" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhIQEBAVFhUVFxYYFRcYFRcWFxcYFRgYFxUVFhUYHiggGBolGxcWITEhJSkrLi4uGCA0OTQsOCgtLisBCgoKDg0OGxAQGy8lICUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJwBQwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xABHEAABAwEDBQgQBAYDAQEAAAABAAIDEQQSIQUGMUFRExUicZGSsdEHFhcyM1JTVGFygYKhwdLhY5OisiM0QkNi4hRz8LNE/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QANBEAAQMCAwUFBwUBAQAAAAAAAQACAwQREiExE0FRcYEUM2GRoRUyNFLB0fAFIlOx4fFC/9oADAMBAAIRAxEAPwDl6IilQiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIvaxxB8jGnQTjxa1LRiIAUOdhaXHcr7PYJJBVrcNpIA+K9t55tjecFP83MmRSNlmnrucTe9bhXA0HFgvHKlpsr2gQQOY68MS4kEa8KnFem2jjxYP3EjU7l5jq2XDjyF9Ab34KDbzTbG84Ku802xvOCn+dlgjgfGIm0DmAnEnGp2rIzTyZFOyYyR3i27d4RbpBwqNCg08Ai2mduakVU5lMWV1zjeabY3nBN5ptjecF0LOawMhay7AIyScRKX1pTCmrSszIGRItxE1pjc6+WhjRe0E0vEN6dgR1PA2PHnn5qW1FQ6QsFuN1zDeabYOcE3nm2N5wU8ylk2OyWkNla50RN4U0lvi8YOC3GVrPYooGSiBx3UcDhOwJFQTjxIaeEYbBxxaI2pnOK5aMOt1yveebY3nBN55tjecF0rNqwWWSM3+HNU0YXlldgG2u1aXLcNyVw3ExUpwCb2rTe16102lhc8szy/Oa4dWTtjD8jfhdRAZGm2N5wVN5pvFHOC7xas2LO1sZjydutWAudu5ZQ0roLsdqi2RMk2Z0Vot1oY7cY3lrImuxJNCAXbBeAVLI6dwJGLzGvBXPlqGkDL1yGt9FzDeebY3nBBkiXY3nBdOy5k+yy2NtuskbogJNzewuLhxgk8SlEebNku2dv/BkeJGML5WyEBpcMSQXe3AKXRQMAJDt48lDJqhxsC3cd+d1wreabY3nBU3mm8Uc4KdZ15Ois1pfDC+8wU11IJ0tJ1kKMZRtbg5scZAedJNKAbMdCtdSwNZjztu45qptXUOkMYtcX9Frd5ptjecFQZHm2N5wWzsNrdJG4AgSNwrq9Dl42WWd8jmGUcA8LgjHHVguNhD+2wcbrvtE4xAlotz04rD3mm2N5wVN55tjecFsbXbjHMGkm5dqQACdark+2ukkkFeCG8EUAIx1psKfFhub3t6XQ1FQGY7C1r+tlrRkebY3nBN55tjecFt8kWh0kZc81N4jVsGxeWVbU6N0Ya66CDXgh2jRgujTQCPaZ25qBVVBl2WVxz3LW7zzbG84JvNN4o5wW2ybOX3iZL1KUqy7Q7fSsUS2jdNy3RtaVrdFNFdi5NPCGhwDjfl91LamYuc27cuaw955tjecE3mm8Uc4LY5Ttb2OjaH0DhwjdBx20Xpk2Zzg8379NFW3Mfmp7PAX4M7/4oNTOGB+Vuq1ZyPN4o5wWFJGWmjgQdhW4gtMpfdlk3M1FAWCjttHal7ZegBjvnS0jkOFFW+mjdGXMvluKsZVSNkDH2z3hR5ERYFvREREREREREREREREREREV0cZcQ1oqToCzbNZJmOa/cnYHYsFjiCCMCDUKY5NkbLuZc6611KmlbtcDh6CtlHCyQm5zGf5ksdZM+MCwBByWyyLll1mLrrQ5rxwmO1/fFemU8rslYGMs0cfCBJbpw1aBgt92jtP/AOg8wdap2jjzg8wda3GopcWK+fX/AIsIpqoNwWy6LAnzmZJTdbHG8tFASfssPJWXNw3UCFrmyGt0kgAY4aMRit52jjzg8wdap2jjzg8wda4EtJa27qutlWXB39Foso5WZLcAssbA11TdwLh4pIGhe9uzoneRuR3JoFA1uPxIW27Rx5weYOtO0cecHmDrXQmpMvDmoMFZn48losr5adaYo2PYL7P664uwpiKcRXnlHK5mhhhLABENNdOACkPaOPODzB1p2jjzg8wdakVFMLWOmYXLqarde41FjmM7LQ5Iys2zjGzskdWrXHBzcNRoVj5Zyk+0yGR4AwAAGgAV61Ju0cecHmDrWHlnNUWeF0u7F12mF2mkgaa+ldMnpjJiGpy3rmSnqtnhIyHJY+XM65rTud0uiDGXKMkdR3pNKKzN/OJ9ka+MxslikxfG/QToqPZTkWLm7k5lqnZBJIY79Q11K8LUDjrxU37lzfO3fljrSR1PENk76/RRE2plO1bmef05KK5wZzOtUbIGQMhiaahjNZ1E4DadSy7Rn1aawGIbmImhpbW819KYuFBs+K3/AHLx5278sfUncvHnbvyx9Sq21HYDhfcd6t2NZcnj4hQjL+VG2qXdhA2IkcMNJIcfGpqK0DMmtq5z+GXGuOAHEAurdy8edu/LH1J3Lh5278sfUuu00tgNw01XPZ6u5I1OuYXK4cntZJujDQEULQMOX2K+GyBj3vBJv6qaNa6j3Lh5278sfUncvHnbvyx9SCppRpxvofsjqerdrwtqNAuWmyfxRNeNQKUoPTr9qQWMNe+S8Tf1U0Y10rqXcuHnbvyx9Sdy8edu/LH1J2qlve+++/XyTs1Va3hbULk0OSywUZM8CtaADrXta7Duha6+5pbWhGnFTLPHNIWBkbxMX33EYtu0oK7VDMo2sxBrrl4HA40odWpWDYGIuHu9dyrcagShp97ovSzWcsrWVz6077V8VT/iDdd2qa3aUphoWu39/D/V9k39/D/V9lz2mmAAvkM96s7NVXLrZnks+2WLdC1we5paKCiuslmLK1kc+tNJ0U2LXb+/h/q+yb+/h/q+yjtFNjx3z6qTT1RZgtl0WU/Jd5wc+V7gNAOr0VV2WGucy6xpJJGjUBisTf0+T/V9lTf38P8AV9lyZqbC5oNr66/VSIKrE1xF7aafRa/e+XybuReckDm981w4wQtrv7+F+r7L1iy1GcHBw5CFk2NMcmyW5rXtqlvvR+RWgRSK0ZPjmF5lAToI708Y1LQzRFji1woQqZqd0Vr5g71fBUMm0yPA6rzREVCvRERERERERERERbfINoo4xnQcRxjSPaOhahXMcQQRpGIVsMpieHBVzRiSMtK7pmdlPdoQxx4UeB2lv9J+XsW/XKs1MsCOSOb+l2DxsBwPIcV1QGqsrIwx+JujswqaOUujwu1bkeiqiIsq1oiIiIiIiItNnf8Aykvu/uatytPnf/KS+7+4K2DvW8wqp+6dyK5pFaC14umjm0cPYcDyrvGbOVRa7PHMNJFHjY4YOHz9q+ccp2nc5Yn/AOOPESarpPYxy1uU5s5dwJqFvofq5RhyL0qsCZrrasPovLpCYS0n3Xj1XXEVAqryF7KIipVEVUVKpVEVUVKpVEUA7LvgrP67v2rlMzWytfH6aH0GgIPxC6v2XfA2f/sd+1cZbarlpe0nguIB47ooV69NIGwNDtCSF49RGXzuLdQAQtNJGWktOkGh9isW3zgstCJRrwdx6jydC1K86aIxvLV6cMglYHhURVRVKxURVVEREVVREWTYLWYnVHenvhtHWttlqAPZug0t17WlaBSPJZvwBp/yb1fAhb6QmRrojvFwsFWNm5sw42PIqOqiIsC3oiIiIiIiIiIiIiIiLd5vPNJG6hQ8ta9C7Tm+4mzQEmvAC4nm5/c935rtebv8rB6gW2X4VnNYo/ipOQWyVCqqhWFblDMr51TRTSRNayjXECoPWsXtztPiR8h61ps8x/FtXvdCgd47SvTlMMQbdgNwCvLiE0pdaS1jZdV7c7T4kfIetO3O0+JHyHrXKbx2lLx2lVdoh/iHmrez1H8p8l1btztPiR8h61jZRzmnnjdE9jAHUrQGuBrtXMrx2lVvHaeVSKmEG4j9VDqWcggy+i2ucIo9nq/NbHNuV12I1xa+gOsUIIUXqpLm53jPX+YVlNJtJ3O4griqj2dM1vAhfTTNAVytZoCuXmL015yGgJ2BcpPZKtfk4ua76l1eVlQRtFFzg9i0+dj8s/UtdIYRfajksdWJzbY9Vr+6Va/Jw/q+pB2S7X5OHkd9Szz2LT52Pyz9S5rnHFubZmA9467XRWj6VW4Ckc1xY0Gw8VgJq2uaHutc23H6Kd90q2eSh5Hdar3SrZ5KLkd1rjN47TypeO08qydog/i9Vt7PP/KfJdOzjzpmtzWMlYwBji4XQdYprK55lfwz+MftCxL52nlVpXMtQ18YY1tgCu4adzJC9zrkiyktjeLRDR3qu4xoPzXlvLH/AJ8o6lgwOEMTZQ28514VqaNpgMAvHJtqLJG1JoTQ1Oo4LQZ4zgErbnisvZ5BjMLrAHT80W03lj2v5R1JvLHtdyjqWVbrRuTb929iBppp1rA39Hk/1fZaJBSRnC4D1VEbquQYmnLp9l67yx7Xco6k3lj2u5R1Ly39Hk/1fZN/R5P9X2VeOi4DyK7wV3H1H2WFlWxtiLQ0nEE4+grBWblG27sWm7doCNNdPsWEvNnLDISzTcvTgx7MY9d6KQ5v+D989AUeUize8H756AtH6f33QrP+odz1Cjz9J4yqK5+k8Z6VasZ1W0aIiIoRERERERERERERbjNz+57vzXa83f5WD1AuKZuf3Pd+a7Xm7/KweoFsl+FZzWKP4p/ILZKhVVQrCVuXKM9PC2r3ugKBKf54NvT2po0kuAHGAobvXN5P4t616VXG52Cw/wDIXnUcjRjxHesJFm71zeJ8W9ab1zeJ8W9ax7GT5T5LZto/mHmsJFm71zeJ8W9ab2TeJ8W9abGT5T5Jto/mHmsJSXNzvGev8wo/aLO6M0eKE46QehSDNzvGev8AMLVQgiUg8CsleQYQRxC+mmaArlazQFcsC3hEVkjqAnYFzs9lAeaH80fSrYoZJfcF1VLPHFbGbLorl84Z3abT/wBp/wDouk91IeaH80fSuYZyT7o2aSlL771Nl54NPit1PTyRskLxbJYJ6mKWSMMN81FVlwZNle2+1hI9gWPGQCCdFRXqX0b2OWROsLLkQFS4PqO/I18VKD0UWFjW4C526wXoSF2MNHivnGWMtNHAg+lUX0XnJ2O7LawSxoiedgq2vq6vZRcpzj7G9qst5wbeYMbw4TeUYj2hTsw73D0OR/1RtC33xbxGY/xRy+WWYAVO6Eg4mjaHUPStYtt/x5I4JWvFMWEYgjvhXQvHK1hDKPZ3rvgadCumicWh3ADLqQqopWBxHEnrkFuHfxofWaOcPuFGKbVvsiSgN3O+CRwqCuAOqp0lLXkcPcXh1K4kUrjrOlap4nVDGvZraxWSCZtPI+N+moWhVFut4/xP0/dUOQvxP0/dZewz/KtXbqf5v7WnVFmZRsW4lovVqK6KLDWZ7Cw4XarSx7XtxN0RSLN7wfvnoCjqkWb3g/fPQFr/AE/vhyKyfqHc9Qo+/SeM9KtVz9J4z0q1YzqVtGiIiKEREREREREREREW5zd/ue7812rNx1bLB6g+a4dkGWkhHjA/DHrXY8ybUH2cN1xkg8RxHSeRbXi9I224rEzKrcOICkCIqLCtyj2UM045pHymR4LjUgAUXh2kxeVfyBSlUWgVcwFg4rOaSEm5aFF+0mLyr+QJ2kxeVfyBShFPbJ/mKjscHyhRftJi8q/kCwMuZrxwQvlbI4ltMDSmJA+am602d38pL7v7mruKqmdI0F29Vy0kIjcQ0aFcYzg79vq/MrZZud4z/sPSFrsv9+z1fmVsM3e8Z65+S1x/Fv6rJJ8Gzp/a+mmaArlazQFcvIXsLzm713EehfM+WZXMjq0kG8BUbMV9MS967iPQvmPL/gvfHQVupe6l5BYKoXmivxK1G+EvlXcqsktcjhR0jiDqJXgiymR5yJPmtmzaDoPJVBU+zW7IVphbHZ2kUDq0IBFBUltdIBUAqvaCzvdixpPpHWuonkGwFxwtdcStBF72PG6+rWZSi3Pdb7S26HEtN7DbQY0WntGcNgtTHQG1MAeKHEs9lXBcezVNvhe2ZpoKhtSMMTSjjoIK6NkixZPtjniWyiO06ZIrzm1PjRgEAgq4wNYMRvbwtccx/qoE7n/tFut7HkVquzZEwwRSNDcb2IpiAWEYjSuV2St11nfrZeZyVw/9tUr7IEtniBgg3dreEDHLWjXnU1pxGjSolHaA5kb/AOqEtDvSw4K1rQwtF93oT9swq3FzwTbf5G33yKwrHMIzfoSR3orQVOBvehbW2PeWbpFI4YBzmV70O1hauWCkpjOjdKewnqKz7a8RGTGr5ODQaGM0AH00XERLWODjkP7+6sms57XNGZ/r83rB3wl8q7lWTk22SOkY10jiDWoJ/wAStYszJPhWcZ/aVTDI8yNzOo3q6ZjRG7LcVl5xd9HxHpWoW3zi76P1XdIWoXVZ37lxR9wzkikWb3g/fPQFHVIs3vB++egKz9P74ciq/wBQ7nqFH36TxnpVqufpPGelWrGdSto0RERQiIiIiIiIiIiIi9IZCxwcNINQp5mvl3cXiVuLHYPb/wC1hc/WRYrY6I1boOkHQfutVPOGXa8XadVmqYHPs9hs4afZfQ1jtjJmh8bg5p1joI1Fe64nk3L4abzJHRu46fEYH2qRwZ32kDCVjuMNPRRdmixZxuB6qoV2HKVhBXSUXPO3C1bY+b91XtwtX4fNT2fL4ean2hFwd5LoSLnvbhavw+anbhavw+ans+Xw/Oin2hFwd5FdBWnzv/lJfd/c1RbtwtX4fNWNb85Z5o3RvLLrqVo2hwNdq7joZGvDjbI/m5Vy18bmEAHMcFCcv9+z1fmVsM3TwG+v1LAzg79nq/MrOyAaRA4YOPyV0XxbuqplFqJg5L6bjOA4gq3lx9vZEtwwrDzf9k7otu2w83/ZZfZ83h+dFp9oRcD5Lrsx4LuI9C+Zcvj+F746Cp47siW464eb/soHl4/wveHQVfHTvhhkxbwqXTsmnjw3yO8KOqrRU024cqoqg0NV5mW9ennZdUzWzIhdE2WSpvaKAVwNKkn5KXWTINmi72FtdruEfioRmPngADHO6jGggACpBwNdtMSt9Yc9onySMeA1ra0cCXE44VaBhgtkjZXe57u62X4VjY6Id572++ef2UgylNFHGTMQGaKHX6ANajlotMluIdZoblw8GdzrpbTHCnRitZlbOyxSPpNEXXcB/EcBTbdGglXnP2ybnuQi4FKXb5ApswCmOMxi4H7vEiw6XUSP2hI3eANz1so/n/lHdnVmDXyNBYXsPBc5oNH01YU5FELE8B1Hd64FruI6/YaFS3LeWrFO27HEIziKgkjEbCNKjRyZe8HLG723TyFTKwucHMtluyUQPAaWv3781bba8B+hw4DvQ9mAPtFF6WljZwZWGjgKvafR/UCshtjcWndbrQRRxJGlvePHp1HasSSdkbTHEbxdg5/o2NRzMNy/IHzuOH1UtfisGZkcNLb7rAWZknwrOM9BWGsrJXhmcZ6CssPeN5hapu7dyWbnFpj4ndIWoUptdiZLS/qrTGmleG88Ww85ehUUckkhc0ixXnU1ayOJrXA3Hgo6pDm94P3z0BXbzxbDzlk2SBsQut0Vria+j5LqlpXxSY3WsuaqrZLHhaDe43KKv0njPSrVc/SeM9KtXlHVesEREUIiIiIiIiIiIiIiIiIiqqIim6USiIihUolFVERKKlFVEREoiIUVKJRVRESiIiIiIiIqqiIiIiIospuqqiIpS6KqoiJdFVURFCUSiIiKlFVERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//2Q=="/>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'inherit', p: 6, pb:2 }} component="footer">
        <Typography
          variant="h4"
          align="center"
          color="secondary"
          component="p"
          sx={{ pb:5 }}
        >
          Social Media <IconButton color="secondary" href='https://www.instagram.com/cleatsforathletes/?hl=en' sx={{"&:hover": {color: '#FC659A'}, p:0}}><InstagramIcon /></IconButton>
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}