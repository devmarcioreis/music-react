const Songs = [
    {
      id: 1,
      artist: "2Pac",
      songName: "Ghetto Gospel",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2F2pac.jpg?alt=media&token=91e328e6-7b9a-4067-8859-8c5611ad872e",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2F2Pac%20-%20Ghetto%20Gospel.mp3?alt=media&token=9ccc109d-2d52-476d-bc52-d4abe290266d"
    },
    {
      id: 2,
      artist: "A-ha",
      songName: "Crying In The Rain",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Faha.jpg?alt=media&token=47fd0a0e-5d4f-4449-b452-c22aa735a97c",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FA%20ha%20-%20Crying%20In%20The%20Rain.mp3?alt=media&token=b785b777-ae09-465e-a1cc-355cbdfd3187"
    },
    {
      id: 3,
      artist: "Alok",
      songName: "Hear Me Now",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Falok.jpg?alt=media&token=48d20a1a-5878-4242-b557-f84165170dcf",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FAlok%20-%20Hear%20Me%20Now.mp3?alt=media&token=e6a4d8ef-f7ad-4b33-83c1-6f6483b3c53d"
    },
    {
      id: 4,
      artist: "Anderson Freire",
      songName: "Raridade",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fanderson-Freire.jpg?alt=media&token=24de6200-9501-4317-8bc3-775e239e8f67",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FAnderson%20Freire%20-%20Raridade.mp3?alt=media&token=7fbd7c91-8f0b-45b9-9903-0e47560bf9bd"
    },
    {
      id: 5,
      artist: "Djavan",
      songName: "Muito Obrigado",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fdjavan.jpg?alt=media&token=164ba6c3-48e0-4526-bbf7-a2624ad11752",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FDjavan%20-%20Muito%20Obrigado.mp3?alt=media&token=a1aba2d2-703b-48c1-9b1d-db949dce7a0a"
    },
    {
      id: 6,
      artist: "Earth Wind and Fire",
      songName: "Boogie Wonderland",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fearth-wind-and-fire.jpg?alt=media&token=b9df7700-75ca-4345-a2fd-7e6c9328e804",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FEarth%2C%20Wind%20%26%20Fire%20-%20Boogie%20Wonderland.mp3?alt=media&token=b998a769-9c64-4870-b750-640cd5878014"
    },
    {
      id: 7,
      artist: "Edson Gomes",
      songName: "Arvore",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fedson-gomes.jpg?alt=media&token=e5b614fd-5e07-4aee-b0a7-d12a8e041c01",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FEdson%20Gomes%20-%20Arvore.mp3?alt=media&token=30a90709-ecc1-4596-8260-ae621fd0beaf"
    },
    {
      id: 8,
      artist: "Justin Timberlake",
      songName: "Can't stop the feeling",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fjustin-timberlake.jpg?alt=media&token=938a9229-05d8-467a-8e85-a188ba63d2c3",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FJustin%20Timberlake%20-%20CAN'T%20STOP%20THE%20FEELING.mp3?alt=media&token=55567031-b19a-4220-a2f8-9163f5e2d6e6"
    },
    {
      id: 9,
      artist: "Queen",
      songName: "Don't stop me now",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fqueen.jpg?alt=media&token=c8d2e624-e4a8-48fb-86b2-07d7e5fadab7",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FQueen%20-%20Don't%20Stop%20Me%20Now.mp3?alt=media&token=49e85e24-4871-4590-a42e-303522d235c4"
    },
    {
      id: 10,
      artist: "Raça Negra",
      songName: "Sozinho",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fraca-negra.jpg?alt=media&token=03bf3d50-276f-4774-af41-639979cc1faf",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FRa%C3%A7a%20Negra%20-%20Sozinho.mp3?alt=media&token=02f48e20-2738-4e41-9f2d-c48ccc6ea0ab"
    },
    {
      id: 11,
      artist: "Ultraje a Rigor",
      songName: "Ciúme",
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/images%2Fultraje-a-rigor.jpg?alt=media&token=dcaa5b57-c2a7-4ec8-93ff-6657e3c5f460",
      song: "https://firebasestorage.googleapis.com/v0/b/songs-7ada0.appspot.com/o/songs%2FUltraje%20a%20Rigor%20-%20Ciumes.mp3?alt=media&token=64c29cad-d9a8-467b-89b5-175295b49833"
    },
  ];
  
  export { Songs };
