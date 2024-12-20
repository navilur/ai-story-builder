const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name , all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "book_title": "Leo and the Whispering Walls of Willow Creek",\n  "cover_image_prompt": "A paper-cut style illustration for a children\'s book cover. A young boy with bright orange hair, named Leo, stands in front of a whimsical school building made of crooked, multi-colored paper layers, with tiny glowing windows. The school is nestled among large, paper-cut trees with swirling leaves in shades of green and blue. The title \'Leo and the Whispering Walls of Willow Creek\' is written in a playful, hand-lettered font above the scene. The overall style is bright, cheerful, and inviting, using a limited color palette typical of paper-cut art.",\n  "chapters": [\n    {\n      "chapter_number": 1,\n      "chapter_title": "The Curious Map",\n      "story": "Leo was a boy who loved to explore. One rainy afternoon, while rummaging in his attic, he found an old, rolled-up map. It wasn\'t a map of his town, or even his country! It was made of layered, colorful paper, and showed a strange, twisting path leading to a school he’d never seen before. The map seemed to shimmer and hum with a secret energy.  He was very curious about this, and Leo decided he had to follow it!",\n      "image_prompt": "A paper-cut illustration showing Leo, a boy with bright orange hair, in a dusty attic. He\'s holding up a colorful, layered paper map that seems to glow slightly.  Around him are boxes, old toys, and cobwebs, all depicted in a simple, paper-cut style. A single beam of light shines down from a small attic window, illuminating the scene. The overall colors should be slightly muted to represent the dusty attic setting, contrasted with the vibrant colors of the map.",\n         "educational_note": "Introduces the concept of curiosity and exploration. Maps can lead to new discoveries."\n    },\n    {\n      "chapter_number": 2,\n       "chapter_title": "The School of Shifting Shapes",\n      "story": "Following the map, Leo found himself in a clearing. And there it was! A school made of layered, paper walls in different colors – bright pink, sky blue, lemon yellow, and grassy green. It looked like it was built from a giant\'s paper craft project! The windows weren’t made of glass, but of glowing, textured paper, and the school seemed to hum with a gentle melody. As he got closer, the school seemed to change shapes – a tower would become a slide, a window would turn into a door! It was the School of Shifting Shapes!",\n       "image_prompt": "A paper-cut style illustration of the School of Shifting Shapes. The school building is made of various layers of brightly colored paper - pink, blue, yellow, and green. It has quirky features like a tower that looks like a slide and windows that have textures like crinkled paper. The school is surrounded by tall paper-cut trees in shades of green and blue. Leo stands in front of it, looking amazed, his orange hair standing on end in a mix of awe and excitement. The style should be whimsical and slightly surreal, emphasizing the ever-changing nature of the school.",\n      "educational_note": "Introduces the concept of shapes and how they can change and be perceived differently from various perspectives. It encourages imagination."\n    },\n     {\n      "chapter_number": 3,\n        "chapter_title": "The Whispering Walls",\n        "story": "Leo walked through the glowing paper door. Inside, the walls weren\'t still! They seemed to whisper secrets to each other. One wall made of textured blue paper talked about the ocean, another made of yellow paper told stories of sunshine, and a green wall whispered about the forest. Leo listened carefully.  The walls taught Leo things he had never heard in his class at school. He learned about patterns, colors, and textures in a completely new way! ",\n       "image_prompt": "A paper-cut illustration showing the inside of the School of Shifting Shapes. The walls are made of different colored, textured paper - blue (with wave-like patterns), yellow (with sunburst patterns), and green (with leaf patterns). Leo is in the center, looking up and listening intently to the walls. The room is filled with a soft glow, and the patterns on the walls seem to gently shimmer. The composition should emphasize the feeling of sound and secret learning.",\n         "educational_note": "Introduces different textures, colors, and storytelling. Encourages active listening."\n    },\n     {\n      "chapter_number": 4,\n        "chapter_title": "The Paper-Cut Puzzle",\n        "story": "A playful wall with a big smile made of paper cut-outs challenged Leo to a puzzle. The puzzle was made of colorful paper pieces of different shapes – circles, squares, triangles, and more! Leo had to fit them together to make a picture. It was tricky at first, but Leo used what he learned from the whispering walls - he saw patterns, and he worked slowly, like assembling a beautiful paper craft. Piece by piece, he created a big, happy sun!",\n       "image_prompt": "A paper-cut illustration of Leo working on a puzzle made of colorful paper pieces. The puzzle pieces are geometric shapes in different colors, and they are scattered on a table made of paper. Leo is focused, carefully placing a piece. Around him, the whispering walls from the previous scene are visible, now with more playful elements such as cut-out paper smiles. The puzzle, when almost complete, should be shown forming a sun. The style should be bright, fun, and depict the joy of solving a problem.",\n        "educational_note": "Introduces basic shapes and encourages problem solving through puzzles. It illustrates the use of patterns and spatial awareness."\n\n    },\n    {\n      "chapter_number": 5,\n        "chapter_title": "The Secret Gift",\n       "story": "As the sun began to set, the School of Shifting Shapes started to glow even brighter. It was time for Leo to leave.  As he turned to go, one last whispering wall, a wall of shimmering gold paper, gifted him a small, paper-cut star.  “Remember what you learned here, Leo,” whispered the wall. Leo hugged the star close, thanked the School, and followed his map home. He knew, even though he couldn\'t see it, the School of Shifting Shapes would always be there, ready to whisper its secrets again.",\n       "image_prompt": "A paper-cut illustration depicting Leo walking away from the School of Shifting Shapes at sunset. The school glows softly in the background. Leo is holding a small, paper-cut star in his hand, looking back with a smile. The sky is colored with paper layers in shades of orange and pink. The style should be warm and convey a sense of gentle magic and closure. The paper star in his hand should have some shine to indicate its special properties.",\n         "educational_note": "Reinforces the concept of a magical place that holds knowledge and memories. The paper star symbolizes the ongoing impact of learning."\n    }\n\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
