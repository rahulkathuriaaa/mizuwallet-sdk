import { Network } from '@aptos-labs/ts-sdk';
import { WalletName } from '@aptos-labs/wallet-adapter-core';

export const MINI_APP_URL = 'https://t.me/mizuwallet_bot/mizuwallet';
export const DEV_MINI_APP_URL = 'https://t.me/mizuwallet_bot/mizuwallet_testnet';
export const DEFAULT_MINI_APP_URL = (network: MizuSupportNetwork) =>
  network === Network.TESTNET ? DEV_MINI_APP_URL : MINI_APP_URL;

export const MZ_MSG_TYPE = {
  CONNECT: '[Mizu Wallet Connection] ',
  TRANSACTION: '[Mizu Wallet Transaction] ',
};

export type MizuSupportNetwork = Extract<Network, Network.MAINNET | Network.TESTNET>;

export const MIZU_WALLET_ID = '07418a1b-9574-4449-bd34-2146db60b05c';
export const MIZU_WALLET_TESTNET_ID = '0c460c1a-5175-4383-b1c2-35b934f5aa71';
export const DEFAULT_MIZUWALLET_ID = (network: MizuSupportNetwork) =>
  network === Network.TESTNET ? MIZU_WALLET_TESTNET_ID : MIZU_WALLET_ID;

export const WALLET_NAME = 'Mizu Wallet' as WalletName<'Mizu Wallet'>;
export const WALLET_WEB_URL = 'https://mizu.io';
export const WALLET_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAQCgAwAEAAAAAQAAAQAAAAAAlNB3SgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAALERJREFUeAHtnXm0XUd15rc1z7OeJmu0ZEs2HnFs4yGriWmbxstM6ZA0fyQNTvdqOgSymIIXEBscOg6GhKzQCc2CBuIE0pB0O2YycQx4CBgIOAFPYMlPsgZrtObZRv376px6vnrS0xt0qu559+xa77w7V9X+qvZXu3btqnOG3XTsmHlyBByBRiIwopFSu9COgCMQEHAC8I7gCDQYASeABje+i+4IOAF4H3AEGoyAE0CDG99FdwScALwPOAINRsAJoMGN76I7Ak4A3gccgQYj4ATQ4MZ30R0BJwDvA45AgxFwAmhw47vojoATgPcBR6DBCDgBNLjxXXRHwAnA+4Aj0GAEnAAa3PguuiPgBOB9wBFoMAJOAA1ufBfdEXAC8D7gCDQYASeABje+i+4IOAF4H3AEGoyAE0CDG99FdwScALwPOAINRsAJoMGN76I7Ak4A3gccgQYj4ATQ4MZ30R0BJwDvA45AgxFwAmhw47vojoATgPcBR6DBCDgBNLjxXXRHwAnA+4Aj0GAEnAAa3PguuiPgBOB9wBFoMAJOAA1ufBfdEXAC8D7gCDQYASeABje+i+4IOAF4H3AEGoyAE0CDG99FdwScALwPOAINRsAJoMGN76I7Ak4A3gccgQYj4ATQ4MZ30R0BJwDvA45AgxFwAmhw47vojoATgPcBR6DBCDgBNLjxXXRHwAnA+4Aj0GAEnAAa3PguuiPgBOB9wBFoMAJOAA1ufBfdEXAC8D7gCDQYASeABje+i+4IOAF4H3AEGoyAE0CDG99FdwScALwPOAINRsAJoMGN76I7Ak4A3gccgQYj4ATQ4MZ30R0BJwDvA45AgxFwAmhw47vojoATgPcBR6DBCDgBNLjxXXRHwAnA+4Aj0GAEnAAa3PguuiPgBOB9wBFoMAJOAA1ufBfdEXAC8D7gCDQYASeABje+i+4IOAF4H3AEGoyAE0CDG99FdwScALwPOAINRsAJoMGN76I7Ak4A3gccgQYj4ATQ4MZ30R2BUQ5BXgRGnmE2G9qdKOrlOX/HpWPHzPg7/tIbpCM8HuV6nud6PMT1i/CJ/3MEhoaAE8DQcBvSr6TsL6C9m3fz5Lkyi9G9siqJITCDnsfXetR31WLlNYvHcbw/hivkzUciif2wwn4RBZcnR+BUCDgBnAqdCj8bi4YeRvl/5UyzX3212Yp5KO5IFPZIUcgIlFij/8GjvPcC3+XxIJ/pOnIYZeb11r2Qxz6z3Vzref5vu/gtz+0Ql8wCEcRYrvFmE8aZnUnryuI4TL57IIW9XM4J4OOpBwEngB4o0j7RyDwChX9km9mcx8xmTIQMLjPrmja4co9CDsdQZBHDvgPoPsq/DYtiJ9d68l632ewnm8y+utFsLY8GedgErslmCyAGWQwH+P12Lk0jPDUbgTPsJo07nrIhILQPcm3hmmL28f9k9luvMps2iUEc5R4hW75MZ7Q811u9X8fv9X48hLWwGwthyw6zbkjg0W6zB35u9o+r+aamH5DBqKlmi8cUlsE2yvXUTAScANrQ7hNR7C5sr+cZhdevN7t4ldlfv9Xs3KXFNGAgih5pO7B3pHDyZYA/0bPIW7IYNm01ewIyeOhRsz/+MW8+wzXdbBmXrILNTgQA0qzkBNDm9l7BKPyU5vGMzA9+0OzqiwZOAn1VPZJCfBSh9CaVbfgPHnnS7EsPmH3mQXLCZ3DWLKYGkMBuyICfuL+gL4A76H0ngDY2ZlSyOfgGpG1bmLff/4dmv3wxy3sooRyDVSWRQbAaeNKa7wu8fpSpwee/afanX+NLXWZL8Rl0M43w1PkIOAHUpI2nouzy1T3LnP3HH2NacE71JNAqqshAVysZfJ+pwds+b/YDLIPlrFZ0s7IggvDUuQg4AdSobWdhCWzXyItp8OxHzObOhASkpDIVEqZWa2MvDspP/T+zd91pNn9R4STc5ySQEP32Zl2hkdleQTqhdM2/F2sdH3/AbX+VR/mFW7QCRASTWSp85xtZRnx/4TTUOvEU7yWCqSOTN22NmlUD/Tq89SvnmP0F8/Gv/3NROSlmjiQiiFODG65iteBWs13bg3/Qxie2QnLI52WciIATwImYtO0dWdry1ndDAqMXm934VwT54K2PipmjYnHFQKRz1YXED/wBEYj4JbrkqCQ5DxQ4dMp/J4CataRIQKG7i1getA1md32nqGDw4BdPs/wX6YgErmFF4v/8HpbJWsKXqZPqdzpJocnzIJPl5NV6nUUY8zKupVxLuBZzLWL+oXBm+UamUZ8J/NY77Omgf+Jv3Ql4IiZtf0ejrBx/BAfabvwCz95ROARFAr3X81NWtrW8mz9pdvs/mi1kmXA9qwNDSZLrmIKN8HEYYcsmqwJFDykIzbP4KE3XczkhRIZ65LuzeRzP70bzmWZGCrHexxPtc9BrT4NDwAlgcHhl/bZGxKfXmv3v/272phuLETk67HJVJK5CbNkJCb0HYkLLRqOcUrzBWAPyIRyEOF61yOy1l5itWliQwQH2KoxCobVRSiHMug4wBTrAHofnedx7gIBFCGP7HvY28PgT7aIkzDmEU4skcFoa+ypmEsg0DXIQN4k0dzkbgET/yQmgf4za9o2oNKvYM/C9/2E2lY7eOirnqpimAiKef7gf5f0jTPdlZqtRzsEkDebS18ko+39A+X/9GrN/fwVmvVY9+kna1vwLNDtugNJuyK0QwUasiJ+tN/uXdWbf4ApWhSyFaVgqYDWKArfwuwP8XuUPhrD6qVLHfOwEUPOm1Dx59Rqzb3/Y7N9d2h4rIJKORuvrP8DqADsOJzPiyuweUmJUt01cS83u/W9mr7i8ILZobUhRpbAx9TftOQQZ7cA6WEee//oUm55+ClkR1BSsBFZUlmMlbJB14UQQIe15HGmX3Hprzyt/UjsE0P8wx9XhH9ddhmK0akam2qpMWQFjNAdH8b94DyPsDLYgD5EAJiDUkrmY6vz+818mr+lml6ws/B4SSf4PlRmvKKaISEkPeh5fjwabKYz4C8nzl841e93VZr95ldlFWBprIIWf/ZypAQ6VRdRfZXp6EQG3AF7EopbPsJhtCsqwk1FuEyHC82YVHT83EUQrYCfz77N/nzn5Ic4e0dy9VMqhgKddkUsgg8c4H+HP8HO87Q1DyaUgBLFCrGMrNrv3m33rB2Zv/BIWwLNYA/Pwq2ANOA8UWGta5qnGCLxA3WZqXrsZBxjmrVIc+YpXef5LqVTudM4SuJkR1ggQCpuYTqN4HVv2GNOK884ze/snzf7uviIzWRuDSVQtWAvyU4R68lrTCeUjv8nrXs7Kxe1mH3wN06lunJkQl8jHU+GXcRxqjsBBOrM83d9lpFRqHeGKd/L8j8Sj3YoGM42qSImegASWnW32ax9nZ+IaOiWKPFgSaEVA1dI0Qvmozspr1lSzP3iT2d3vK0KcmQ3YpIrq31r2cHvuFsAwaLHnZAbQgf8ex5ZM2jga5656JJ7lCzHdl2JKMw0YV4ESacAPG46Q8d2fxVRnuhOV93RlVJ0DoYhEuW68hnMXbilCnCfzWVUkdrr1bNfvnQDahfwgypUFsIjlsseeYSaA6a2k/pw7RQLQ8WVvwNmm9fjpFfWgrZDcOSx33sN8/WsPFZJFi6MKOWURHOOSNaBDV77xHgKsWEJcrOkViY8amSpqvkZil1VoRb4Zo/86HFkhtYMBKDia5pcs58U+4nAq6kESby3OOTuToKe/49R0yKUqK4BcQ1IZMc9XvozzGP8zqwQbLIQftwnOomJt/F9R8+WVQMqg+Zu84/GaWr6neHEdwS3TblgK1weUmgUoFPbpjeUXkK+dadkCSq8QYCmgVhRWsMy4dw2bkH5USFelFdAbr5tebXYFy4/dxCVMRpY2Q9q7ellelwZQlrIqKUQVPspIcZR5YuiArZ1QLajXPGpuqkZV2Ko2oIg09JHmm1ImHYmtgzAVJaaw1rqnw6o4yrFmc1FTmbTtSHEaMJflSB0oug8wVZWqINxK5J6OJfv0fWavvAqRIT3lXaW4kkGWzCQChD7862bXvo8VjWWnEdhE/YZrGlYEoMrqJN1LCUI5h86nm2VswSxWyKcUfR+dZzfXZq6tEMQhvMvhXHyRhS51LvUkuYBZfw5x5MyttfNMFoM+3kuHVhy59K1OSUSl+j4BAeimIWMTKMZg5J3OfP1yAm++j09iIlhqSa+KpECdZfgYvvaI2ZPdBPOwOiArIBJPFWUojzM0GpC05fk1VxA5uIYI4gnN20MwrAhAI7mUdBJK+8s03CsJIV1EqOcRFOIFFFdrvyIIna+vG2iIIH7Bo7zKmlMePEhADY8b6bRbiCV/lPn0P2xhXs1lmIGBFFjnnsWSmzaWSOnknKrDLbYUxiri+g511waZsXjMKx8aybK/FBVRdx66YB4EsJF4fp7vB6eqUjiHkLZ+ABIQAYizq07KU1aAiPSma+kHDxNvgRXQtE1Ew4oANEccTRDHdzZxfY7Qz2+a3fFas9f/CoMjDTnYdAQ22YMFsX0ngSKQwJPr2HTzc0Jdn+S9beTGSDQZS6OLvJ/luyIEdRzpYu4k2efRWs9S1wMQmZYF25U0ImsKsgLyVbz9eDbfVJmek/kF7ndBAL9N+2rDUBIrQI1JulQrGpDZdtqY7hWmiHq/Cak0hIaPqJq7j8XkXMA8cT2d7zdu5/owwR1SWJIsAXWW1itGhYnxdekzpTEolAJEVi5hZ9rlZr/7BmLTbybfPzH7p9vM3n99MSVY043S0Tm0Pbf8afh97n+6CagUTrvhlNpVl4ifwpI1tZJlVmXSJqNFmOPfhozXby5yTiFrtGbkz/idC8F1N1aAGKBBadgRgNpGo+FGFFLWwKqVZv/3pxDCBzDl6SwjeU8dVI0brxgVpiUgXbHhlZe+GwlCz5XnmZDLtZdxMOd/ZcT9KDfPeBd37YEonl7HZ3w+s0St4n6v6pwyhaCVcjoTvkh925nmz6R0CBdIKk9x2VPLdCElklUDgtrxSlkBTA8nDUuNKCAayv9hLa7m5k8QjbZMI9E+s/M/hAOQub2UXEo9kCQyiAQRiSGQQmkp6GjuX3sFYbhYGZ95C9tKd7D1lDK1sywQzUAKqeg7gXBQuCNYAXVIk5giGdYYVao8Bb8Lea8uCSC2TeUFlRmevZAnuRk9lTCDyHdYE4B0XB3jaUbFZTjv9jINeMdfoiBYB1JqKehQUiAFkNFjJANtKnnzjWaP38GW09mcUoMzbikdNCcJBEVjuN3K6ThtTaWizMYq0tLkEciy6hT2PzANeHJjQeapCCDmO482Nch+j/pO1cLUOL9hL2srCazCdP/i/WZ/c0+B+BD1/7jmUgeJ0WMyF1ctJVz1FraXEk7aDQksyUgCQc/wWzyHtaMUO2/xKt//Uv9tDLJrk5JiFKruSAclLOTyONO6sJzLy6ES+kCQmcYAcs1cHIEMJgoma0qqut3aglskAe0qW4SCvvlzRcScrICBTgX6q3gkghfomDNYA/9f7+R4rPMIX92J/yGTczAoAC12hClIHdLE8YVvRN5zRV9WmTTLmQCu9zOl23OgypyPzyuS6DhWGlbN4TOwrSq8+fiS6vmqIwhA0MbRXhs+NCn9/DcKwCvulzYSxEQCkxidPvk2ymAJbCPEk2NraZwC6PZdbU0lqONRmmWQoYIzxlQMtHwA0+VdxDN/qCS82MZVyy5i1UrG8kgAFctSdX2rzK9jCCCCoiOrF9OQH/o6R0GtK8zkqqyAWEYkgTlEJD78Vt7dRqwApnnqpCVQBQNtZQogmeLolbrc3vlH/dDUaDJTABFAspUAlF/BWylTJJbZtKcRPCbLsSmp4whADRcalOHyrgeKZkzRniIBjRyXv8Tsg69jysFcVTexSJmCZxxN24UFICuk3UlLpovkCFRocgKQQ3wB5KJgrZCippYvK3so810gAqC8xM1YWbWryKgjCWATyj8er+57IYCtzNE1UqZwIMX++Fs30BRMCY6ilCkBDTpPAfsYFeWQbGeKeM6aRC0ggLBuX3GFgoVDWx5lipUjTZA1g/a3GdocovaUkbK/9hSS+4lGygXyUD9j9uMnitJjh62yLnGpcfFcs1tewf4CVgUUrpsqBcKBzF5glIpOj0hCqcrsL98xOAKlMSmmI2HqRg/dFS2A/ioz1M9L62UGKwGKawiW1lDzGma/60gCUBtom6rhoLrvkaJFNF9NkSKx3PAycmdkTmEKx3pHhdCdc3qmAG1igFjsFNbq5XRNMAMoRmKmGc+VBJCCZIRtrLu2B0dLTu83ISVSi/ZDt4NRaQQE8NF/Y213V1GfqKxV1i52ypVLCBBahS+A+XmqE2c18GuOsQUCULBTW1PJADM1BYAAUjgBQ3sh70GINUcaiYPVIDSdE1H1/oYc9R9KGR1LAPKYK0hHd9hdu6mAJhUBKN/JdJzXX0g5kM2MFNpA1jJqNFw9wZz7aLsJQHUhTcT3oelIJMLwZkX/AsfQQ7WtO0eSLBcyDdC9BVnhbETqWAJQ64UOxL+n1qdty0gsF5xFOVgAVa+Jx9rLOTVBLYZC9EwB4odtegyjJoQXMaiyGqH9ILzkBFDOAXT60IJyWTOFU7NKbKrKq6MJIKybw+prNhZwpRilQs5lB1oyn1fMI1M5kaRk4RhuRv+6EEAIB6YXBWWtqleW+QSLB3LZU64CpGq/svlMpwSNk0Wj6WPFstQ1u46WU3M5KeRjTAF0QlDqDtQ1nfLmsC2ZETqFFSAlQx/CXOCYZGtnKrUmTAFY+Qin+FRcn5BnSQA5xJWjeBr9Jfg0IitULFPdsutoAgjHaDGZe2wbjp3SkZTCVI1uZEXF3QgB6BxC3dq76hQIQPlCZknkGEKFdTybWCmM1kP4/al+EvKkhx6EUHPIq7Mlu+TUxMKS+6gJqeMJYDaj00+fY6twwrXkqOs6X+5cYgK0HJhqR1koCybIoRCnUoAo8yjFPXBVHW6tsoOMFHQYhUyRf6t8Ec/psgAoryl3DOpoApDZOE42M8ofl5JSzFXVkWIHmq/DSbAAUk0BwjSmRhZAOF0X4pO5HklBeFSRQluRqZY8I75V5HuqPEZp6M8x3zhVJTJ+1tEEIBzjMVo74oaSRAwQO+j8ckNJqnXkHiVLJMdg+56OYJO9rENBqt5EEwkgODwzyTsaMku1rDlYbHN8v+MJQP1Ty2Y6EjxHmqnNMXTWVMD26EEPE+SQqu8ywhQAAtiTQ+a+q1HZJzoXIIQ2V5ZjvTNK1U9rI3VQGP7lOkRjotaRZRInQiDovTKviZk6CobV0WgapQPZVih3EBGBFfQULawKsz8uq5j/+HIKUBN+Pa6OKV50PAGEToSTalt5jFYKEEOeZY+ZVW4oCTEIKQqrWc8cC7Znlkojf2CVqR2ihlUNOk07yq4Su4Hm1QwCQMp4rFTqWIDRMiEJC9bW4BSdKOSJRaO4BqVg4RRP8/4vhZMFMKmcN1ft9wiyUU5r0FNqeSeWU4Cq/Rl5G2fgpXU8AQTTDikPl9FkA4dmaN8cI2VgGrADBU2xlBQaDHKJBDC0Wlb7qzNk+yfUzGMiu4T5t6IxQrKI3DKV11p2O553PAEEUDWK4AjMkRQZdxXBJM8zb9VgUnWKBNDu3YClARDCZ3s85xULG8ibgnSvxzhHr7iIE7LrIYATPunMNzqeAAKRI6XuqJsyxanFaCbCIZiEUbpqk1j1D+UgVA8BtHukQkHlB0jhOQ+zHNpuR+v258TyhmVNykxcTMquOKi8O54A4jl6u8tQ4Kiog0JpEF9WPLmOyw7x5IP43UC/GkZeTQGwMOqQNFeeUDoBqya8ICJ46sYvPYSXWOhgzTgBJEY5Y/ZxFNmPBYDeJE86LHRGeUpOCh9AJABNMeqQwsnApeOs6mVAtd1E8NwFAWgakCMpnFtBHKlDj3PIMpAyELWzU1B6pNSGktQHaWqeqhGxS7EAlJdiT3kPAWRSiFP2DsnLF6ZpCy31qZrwpIThdCUcuMktngAs1ozIDCbLMVicEttMH3Y8AURHUs54ct00JNUUIHio6Z3HamABxHny5ETySgm1Q0+3IA8rAQmVotR/C4FA+DRSbG9OWP0hZ93xBBAtAO0oy+ZJLtfFh9wqp/hhJLTUTs1TVOGEj0aUTsATPqjgjbAejzV1lEspkk7xqvr/YXMTPg1ZH5EUqi+lPjl2PAFEqFN3nFiOHsfGcNIEPSgQGibqzoT3y2uVZSDPR0teKUwCecUtmk7tjns5EjfkSBXINEBnSTRBOTpexthfUs//1U9jWeOiQujNilMkgHh/wBRKN9gqp9xAE1YWsN72RQIYbOUG+X05AXU8+M4EPo1BViXL15tBAIxMWYJJSgYIjiQ0NcGAWLAMrRZvmJmll/RRSJxSBR9AInkDhijj85kiOdV2l5arOOLxTk8dTwBJlLCfXhE3lKQAN3AMQh3JpBD9iBo+jsueVccBKPNg8QDkzkybuRQIFG4QAuk0YT9Aij46kD6T7TtRYV6gQaONHk31VJXo2VKagH3iHYJ3JL5bzmCwCT4A/SABsGo2HTm2uby5S6opT2yqENcgCwDmqTquQaLULXU8AQTAad2cp+gGT7J6VAKFOKI8madu2oNvLAyP7e9S4RgttCWBuEVADgSwL7UFUMKoOx4v1KEuLD2mvM1b+1utqEHHE0CI6EIZw8GSUWFS9NSWFg0bSkA2RTFhRKST7sYCSL023iLSKZ+OTxg8E092fpobr4ZzB+NQfcoaDe3D6NPo0pkOiQK5hlazdL/qeAIICoOUW2F0kUCOFI7JStRRw94GRsRtEMCRuDaegmkGAlQp41SZzFglKW6IEiwevHHrOdk5VyzAhPJ+h6mmGwOBNtd3Op4Ags7TUR+FAJKHk5atlnJDifY0TYYAHt7NUeeZlsb66oyR48KyJ0qaInruoMiNvL+BBbA3xj4kIrxoASwoD3YF5o5PHU8AsvqnSEoIIPmGklIjdI+5EE+eoKNqlJ0s7xRz4qPIVIcU7g/I2vkhwK66Q8kCOFOa2HJvhwSwHgfjVFkAkd2O+6TzXlTdXrVDSKPSeEnJslmuHXThdlkoaZh+JEAkbDLCFIjHnKVWiP5E0Nr5cubNz2FupXCcjVH7QXhbdpQ1SSVwqfQz5AREphRTmv6wzP15xxOA+kpYn2a0TL0SEAeNcEAGo1aqLaVh1x2E9hwrASGlUogy+z4fSoFFACs0akIAKW6IEmXcsLXPmlTyQWy/aXICIo8smvheJQXUMJOOJwBhHggAh9nh0mROrS/hjDzmrRpBknUg8t4bb3bSpo4VZZO8k0QAmDwpOlRwBDLFePKZQtDUzrkpyHLBbCwO+kuKezy2qblOWmyK9jppQe18MzhzGJ12JXYiRRl7NpRoThy1JH5YwWNwbOJnWLe9yCy1QvRX5TEQwDLdGRmFCbcv7+8Hg/x8rxw5KOUPuhmVKUPypiDxiONkVjUuX0CZTLN0IEknpw4Xr2i6oIRoTbxDcOoGlRNwIZ1oNx1X/sCqU5ibYmFsi3PiqgsYRH7Rc95VBs+kOARFBNCFBfDVNci8s6xcCgYga8mj/nLhEl6w1DqhwzWkw8UrOksYhDFPj2aKn1dgzEqtjWtOXFSh0v8HNCKiEI9vRibkiiNXpYUMMLOoh9NFAJoCJLB4JG5Y+YDwnnqmqFgkngFWc8Bfi/met5SfMG3s9KXARhAA/TIsy22PTrMBd4fBfTEqos4FHI+CKp48hUKE6DiY5RGcYvvLaU3suIOrcQXfLhkg9dp5kBlSfeinRZ0j1hVIcFwWMd8Vi3m7i2kjJN7JStLJsvU0rEYQUfk2gmeUYiMXr6r/r1DgEB0H86TYIafgmAUQwFNb6KClIzCOxNVLM7Acp0zhe8x3AtYD+8mgvrUVLEcRoHPLw7QjG4PUhilIL/aNeTgB33IRR5IzaMyiPTs1NYMApB004t4cG0ooS+fYLZ5GmTisUqyLqzOOVcshz+boB2gXA5Qmf5fkxerRbcJTJO2CXKz51Dqzf/7XooQUBKCcdXiM4L3hMv7tIpDMCUCwDN8Uwkk5uHI1XvPnadzI8ikkino4Ha918jkksqx7NoUUA8+z1H+bLHlnmm2Q3yO+OfBsBvTNLeRt88xuu7sIgtLW3RQkEPvH5edT3mIwhsjl3Ewk1oBkT/UlEV3Hp7ihZEPGDSU96+KJes1hMQ1z4sfXFc0XO23uxozlTuUo9NfOpXQcrRMSybwPmZdhZfz4SbMv3VtImooAlO8sHJufehU8vslsCdMbQd5pqREEIAtAN+28Fwsghs+mas3YIc9kvioLIJX1GNfGv9fN8iZKJ0VsVweVzML3goXIjFMy1dq5eOVpMF20yOy/fNbsRxCBrIBw2EsizfyP1+LPWYK/Bblmp2rMRHUfSLaNIADNH+fQQcOGktIPkFpZggWQEF0RwFymNfc+jVMMyyak1EKVxfR+iKR3LoopAkjl94ji7UJ2I/Do0o9inrMUqmO8qiYBEap8AdMnm933u5RHOaOowNSEbdob1xyvO0ycviEL81I6Z3KnWWn+ynw0FDQc4dV3tYb8iZRhokYkAmNWry+yiYo45ExP84fLZQFkGCX3oJhz5RDE8nn5h5F/Q0ECMoGqPP05+hheusrswdvNnmXVRSQwrYO0poNEOXXvlcIoracRU6ZS/y1sKWX0OMjyVSqQgx+AOfHDjxcSxfl4SvlOlncsd/F8PoUEdDPPFBGBrWVvxiE4H79DN0u7K95r9q0f8ingR6UVEVRBiGFqRee5+iJWHz7EsiCxF6N5PSNVo7YKmeF5h4jRP1JRWXJuKLm8C/McZUi1oWQ75CJT+DM/YrWKqU3srP2jUe03IgHI6nnX+eSNUs5M3LNU5ib8AbMhQN2K7dpbzG7+JOSzscBBRBDxiGQwVEJQPsrjygshgdtoU6YD2im4QGGCkEEk/WpRzZNb4mbKI8RASpHZqA0lD61pcZrReFWnqAyT8NC/dAG5H0rnFFN03Fl0/u6nOPFodSHJUDv56eIQTe9rLyYngpNSOQJjPUPToXnbIMGjPJ612Oz2e3l8B8FCnzb7IVbRfrBXe0QyiG2jbdqqb7h4Lsz6w015BBK4wOz7TAcOQLgbCRJaCf6prZ0oc4rHxhDAPhp8Ho31rbWcDxidZikQJc94X7kLlvAi8YYSyWVMNf7+AR5J6qjtSFG5Ljyb0ufimsBEz1UVWXdrsAYWEL03n4CkD33d7LJ3m133AbOPfcHs2/9itpalPBGCksKzhVO4eK66x/oX33iRFCI5RIKQs/Gy88x+9hGzaxayRfknBD+1+Wi2WOehPHb6XoceTOgjNqF0mv18Heu684pG7t3wPT84nScqjE517lIeUYSUfrEtdMjFBOB8/D6Wxm4sytRIlZsIAo7IPW+W2fuvMvvDb6KMKOQm5M+VNlIWsNsCpl5aifgu8/Xv/i1v4CzUVOlKFPaKRWZLIaglc5jHQxazubRvYwKDw0Q2celId60qnCyEu7WvnE0+D/yx2d0PmH0O7O/fzMyHthAfq/mHS2oMAahBQkQgjqMHYe3rrjiR9atqtNhRVtBJFLm2ldFJJED/SJJioNOnv2b2J2/Nr/xRKFk+Gl1ffTUEcBcKJW3MnKR8IgKlSawUzMAxKRP9AOAHQljLB7IE8M2ERkHxjT6xGP/FuVhSE5m6zWKqOI9LR7uNYPlYMQ664au2eY9BY3Tik6ybKfouv3ntZfSth83u2QCZ8FnoZ3w+HNIZdlM0boZDdU+vjjpKaxw9ZB+dYfPHiA2YkdAKKKv6jj83+1NGibmUtTkVA1DWWXTONWsZlf4I0/QiyIahSLsS25EUbv1mRsc7IdquKRBgQrkHKp+4SIQ0CUy0jwI9DSO1lmkPUb9tIg3VU5eeQ9rhuRglDuutz3k7fEffw9IxLAlZXfrqcErCoTFJB2l0oSj7Nhbzwt+4Lh0BRDP8lb8EAXyFaTqdJCUBhDh5TNtXf4qoNUhAHvlYh5wNrDK1Gertr4MAHsDyxvQWAUgBpT/tSipbocQi/96mGNW1cWiC7gys57IYFDei50qy6FT/eIX3yvf1fD95SkZlPdxSoywANY6OrBLj6462axmlZmDCyQaKZntVDRjz3IlH/PybMUsP0MGYB8hcV2dMkRbSiddvN3srJvjH317MY6NZnqK8vvKMsn/0b8ze/ddmq5aZPYHZLYxTyd5XXfz9UyMQSe7U3+qgT7V0tgRnz971Zl/EUaWUYhKkzq7RUKGkd9xIIRsol3lkKgXQ6LQec3Q5DrBP3Gf2kTslGaNYWY/iVd7/b/lVLJLLUf7N1AvMAzHkrYKX1g8CI+2SW2/t5zsd97FiyZcwZ/vCg2bXn8/mEkxnLe+k8JyLCBQhdzfz4Sf34HeABPYnYgGVpbP5V+Bv+PJDmLHIdCXr1vIFyCeQ4nSik3WOQH7IKJP6+pdCAKuJVlyLn4Jpieqnzz3VA4HGWQARds3ZRjBaXnnHi7HkUpIqU1AE8pS3+Au/Q86Y5ypjeiLUxSsq8yk83CuWmL3vy2a/92fFqTbBIcgXZJXkSNHy0BTrzveYveYlOClZlnNLIAf6Ay8jUVcceAXa9c0DKMPMUZSOwqy4zeyx7he95lUqSfAMU9aFK1iGwjm3HRKQKZyUBBBLJKDNOZ/AyrnsfWbfwwKRrNHKkYwppj6t7RlkpxydFfDZd7L0uhKy3eYk0IpRu583lgAEvJZ+5uAM1LrwS3DU3fO9ojnUcaUcVSlJHA1fhjn+MGSzi5FQu8pSxcuTtXTdVh9mesPqw9M4Iq98r9l7/gJzvPtFGWUtVClnkfPx/yMJyBfyxd+HBM6hXvgEzgF3la16emofAo30AUS4pQBaGprJXHU8c/NPf4XXu5izEyU2Cx+BPo9K0jpa6r3BJv1GhLKQvK87z+zP72a5manBPMrey3RkKHn2VwflqXsT6G7Ci1iO++pjZv/zHg5FYRSeQvTbNNboNU/X92L5kjNcZebx/f7KOtXnykOyK9ruBpZFu9cRr0BdVhE1KH8Mf57ahEDjlgH7wllrv4tQlDUoh3rkzdcT4XU1nXQpCoSi9k5RUcL7/Ja/IrU+j++1PEoRNCrqNJtLsQa0LLAS5ezGZA87Flu+W/XT+ciHvtu6HfxjM8slq8x+8zLuggMhLV1QkF5fwUN9yltWciBEEWU/iKy330nM/hcocxlkRL3WY42lOjuhahw7KT8ngF6tKSUZiVJqPd0Oml280uyNeLIvPpvz6Eol0U6/HoXv9fvjXmo0Pe6NYnTV2vyokYXz8bc/QRz5Q3xpCRcjZI40l7K1W28N8umUpBDRNt/sTch46Vn4RPAdyFKZiRU0ZWJhJQymXiKL3klvCTM5QSW7Xt/1HbPX/yVPhDXl6468nvIi4ATQB97z6KS6LVRQkp18CT+Bwj0vPdPsZSjICsggbChhaUtHYmtDyXgUOMSP87u+NpScrLivPMiGkn8iOnEz5jnTAZnEJ9Ghk/30tN7T4Z06817Wz8ajiLif7PAXBEKQ1TMbkx0iOHcuG2ww13XNZNqgE4BnMqcfzbRpLEqrTTRS6riRBvEHnHZT5leR/28hwe9ife1CfsmeQ/4BV7KDv+gE0E/jSklm0rkVGnoQzdyEY03n3sk6CBtK1Ns1cjNSzoMMLkAxZCFoQ8kcLs21R2BVjJGycJ2woYTPpUhrNrFU+HD7NpRon4SOupJlQHXDnY0VWPQLySvy0yOvg2ZS33DPM5EEMr6cazJyTOKawXtdYKFbhp9BRqOZc2gDTdhQo9dgGW6fTnnjeC6/gIjjZxuIXfhh++RHkkYmJ4BBNDt9Nhx5rQ0l40pF0c8V3nsYctjKPDZsJGEUG+qGEilDXUY/WQYiQF1jqBf6GuLjJd5R5NVNQMJGH73Reoko+KxnKJdAvV/zVngPf0D4XhePWBd1kl9V7PQEJ3saKALqx4ri0+aP3js/RA4a0TTaSVE0ospq0HMlOcn0nXiF98r39byOG0rklNutSxWUzL2SZNGtwbXHQfvn4YgwnRBx6LlSlDs81+vyCq/1okxaCdERZycpJn7FHxMg4ARQEagiB+0zCDexrCjPumcjmWX9aBCvjdlSd9BqVr9I1DWrllfHEXAEciDgBJADZS/DEagpAk4ANW0Yr5YjkAMBJ4AcKHsZjkBNEXACqGnDeLUcgRwIOAHkQNnLcARqioATQE0bxqvlCORAwAkgB8pehiNQUwScAGraMF4tRyAHAk4AOVD2MhyBmiLgBFDThvFqOQI5EHACyIGyl+EI1BQBJ4CaNoxXyxHIgYATQA6UvQxHoKYIOAHUtGG8Wo5ADgScAHKg7GU4AjVFwAmgpg3j1XIEciDgBJADZS/DEagpAk4ANW0Yr5YjkAMBJ4AcKHsZjkBNEXACqGnDeLUcgRwIOAHkQNnLcARqioATQE0bxqvlCORAwAkgB8pehiNQUwScAGraMF4tRyAHAk4AOVD2MhyBmiLgBFDThvFqOQI5EHACyIGyl+EI1BQBJ4CaNoxXyxHIgYATQA6UvQxHoKYIOAHUtGG8Wo5ADgScAHKg7GU4AjVFwAmgpg3j1XIEciDgBJADZS/DEagpAk4ANW0Yr5YjkAMBJ4AcKHsZjkBNEXACqGnDeLUcgRwIOAHkQNnLcARqioATQE0bxqvlCORAwAkgB8pehiNQUwScAGraMF4tRyAHAk4AOVD2MhyBmiLgBFDThvFqOQI5EHACyIGyl+EI1BQBJ4CaNoxXyxHIgYATQA6UvQxHoKYIOAHUtGG8Wo5ADgScAHKg7GU4AjVFwAmgpg3j1XIEciDgBJADZS/DEagpAk4ANW0Yr5YjkAMBJ4AcKHsZjkBNEXACqGnDeLUcgRwIOAHkQNnLcARqioATQE0bxqvlCORAwAkgB8pehiNQUwScAGraMF4tRyAHAk4AOVD2MhyBmiLgBFDThvFqOQI5EHACyIGyl+EI1BQBJ4CaNoxXyxHIgYATQA6UvQxHoKYIOAHUtGG8Wo5ADgScAHKg7GU4AjVFwAmgpg3j1XIEciDgBJADZS/DEagpAk4ANW0Yr5YjkAMBJ4AcKHsZjkBNEXACqGnDeLUcgRwIOAHkQNnLcARqioATQE0bxqvlCORAwAkgB8pehiNQUwScAGraMF4tRyAHAv8fTRTpSk+HEsQAAAAASUVORK5CYII=';

