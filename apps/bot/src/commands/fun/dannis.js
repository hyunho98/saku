const { SlashCommandBuilder } = require("discord.js");

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ //

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dannis")
    .setDescription("Praise the lord"),

  // ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ //

  async execute(interaction) {
    // Create a list of dannis phrases and pick one at random
    function randomPhrase() {
      const phrases = [
        `"I wait for the walker of night, my pitch boss awaits, in his blessing I pray. I can tap all things through Dannis who will bless us with stars with no booms" Dannis 1:22`,
        ":PraygeGif: Dear king Dannis pls bless me and my devoted followers on this weekly reset :PraygeGif:",
        "Who is dannis? For the blind, He is the vision. For the hungry, He is the chef. For the thirsty, He is the water. If dannis thinks, I agree. If dannis speaks, I am listening. If dannis has a million fans i am one of them . if dannis has ten fans i am one of them. if dannis has only one fan then that is me . if dannis has no fans, that means i am no longer on this earth . if the world is against dannis, i am against the world.",
        "man i love dannis",
        "Woke up this morning, remembered I'm a fan of dannis, day instantly better",
        "https://media.discordapp.net/attachments/1090002887410729090/1196657634003128451/OIG.png?ex=65b86d44&is=65a5f844&hm=de7145dccb6e16f2e0958e2fb32469d6fd0c4384d18975d7dbc6db03ca399be9&=&format=webp&quality=lossless",
        "I'm just eating fried chicken",
        "Saw a corgi at work today, pretty sure it was just Dannis there to bless me tho. Thank you Dannis.",
        "please my goat dannis who should be in the hall of legends instead of faker please bless me with a pitched drop that i need on this blessed weekend",
        "Dear king Dannis, Please bless me with atleast 1 pb this week I am just but a humble peasent who wishes to arise to your nobel status. From - Your most devoted follower",
        "I am here to acquire Lord Dannis Corgithy Charles the 1st's blessing for my pitched drop tonight :prayge:",
        "I saw dannis in game last night. This must be a sign",
        "please lord dannis grant me some pitched i need some help to catch up with saku culvert requirement increase :PepeHands:",
        "Dannis I've been a good boy this week please bless me",
        "https://media.discordapp.net/attachments/1178171097858973746/1449167606023065610/image.png?ex=693dea01&is=693c9881&hm=e9cad76dc9ca55b82378bb307cb4b01f5aa12efb48d2a4f15e50871e5a2d0d53&=&format=webp&quality=lossless"
      ];

      return phrases[Math.floor(Math.random() * phrases.length)];
    }

    // Handle responses
    const RIGGED_USER_ID = "109101024282685440"; // for Katie. Make it a 70% chance she'll get this quote
    const RIGGED_PHRASE = "I'm just eating fried chicken";
    const result =
      interaction.user.id === RIGGED_USER_ID && Math.random() < 0.7
        ? RIGGED_PHRASE
        : randomPhrase();

    interaction.reply({
      content: result,
    });
  },
};
