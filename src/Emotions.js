const EMOTIONS = [
    {
      "category": "afraid",
      "feelings": [
        {
          "name": "meek",
          "verses": ["Matthew 5:5", "Titus 3:2", "Psalm 37:11", "Matthew 11:29"]
        },
        {
          "name": "rejected",
          "verses": ["John 15:18-21", "Psalm 27:10", "Psalm 41:7", "John 1:11"]
        },
        {
          "name": "helpless",
          "verses": ["Romans 8:26-27", "Mark 11:24", "Hebrews 4:15", "Proverbs 3:5"]
        },
        {
          "name": "insecure",
          "verses": ["Philippians 4:6-9", "1 Samuel 16:7", "1 John 1:9", "James 5:16"]
        },
        {
          "name": "confused",
          "verses": ["1 Corinthians 14:33", "2 Timothy 2:7", "1 John 4:1", "1 Peter 5:8"]
        },
        {
          "name": "anxious",
          "verses": ["Philippians 4:6-7", "1 Peter 5:7", "John 14:27", "Matthew 6:25-34"]
        }
      ]
    },
    {
      "category": "sad",
      "feelings": [
        {
          "name": "exhausted",
          "verses": ["Matthew 11:28-29", "Psalm 4:8", "Jeremiah 31:25"]
        },
        {
          "name": "bored",
          "verses": ["Colossians 3:23-24", "Proverbs 19:15", "Matthew 28:18-20", "2 Timothy 2:22"]
        },
        {
          "name": "guilty",
          "verses": ["Romans 3:23-24", "1 John 1:9", "Isaiah 54:4", "Acts 8:22"]
        },
        {
          "name": "ashamed",
          "verses": ["Matthew 5:14-16", "Romans 10:9", "Psalm 103:1-22", "John 3:18"]
        },
        {
          "name": "lonely",
          "verses": ["Isaiah 41:10", "Matthew 28:20", "Deuteronomy 31:6", "Psalm 27:10"]
        },
        {
          "name": "depressed",
          "verses": ["Psalm 34:17-18", "Deuteronomy 31:8", "Philippians 4:8", "John 16:33"]
        }        
      ]
    },
    {
      "category": "angry",
      "feelings": [
        {
          "name": "hurt",
          "verses": ["Mark 11:25", "1 Peter 5:10", "Mathew 6:14-15", "Numbers 23:19"],
        },
        {
          "name": "hateful",
          "verses": ["Romans 13:4", "Psalm 46:1", "Matthew 5:38-39", "1 Timothy 5:8"]
        },
        {
          "name": "critical",
          "verses": ["Ephesians 4:29", "Matthew 7:1-5", "James 4:11-12", "1 Peter 4:8"]
        },
        {
          "name": "frustrated",
          "verses": ["John 16:33", "Isaiah 41:10", "Galatians 6:9", "Psalm 34:18"]
        },
        {
          "name": "annoyed",
          "verses": ["Proverbs 27:3", "Ephesians 4:1-3", "Proverbs 12:16", "Luke 6:27-36"]
        },
        {
          "name": "jealous",
          "verses": ["James 3:16", "1 Corinthians 3:3", "Exodus 20:17", "Romans 12:2"]
        }        
      ]
    },
    {
      "category": "strong",
      "feelings": [
        {
          "name": "respected",
          "verses": ["Matthew 7:12", "Exodus 20:12", "Philippians 2:3", "2 Corinthians 10:12-16"]
        },
        {
          "name": "confident",
          "verses": ["Proverbs 3:26", "1 John 3:20-21", "Hebrews 13:6", "Proverbs 28:26"]
        },
        {
          "name": "worthy",
          "verses": ["Matthew 22:8", "Galatians 2:20", "1 Corinthians 6:11", "Romans 5:8"]
        },
        {
          "name": "proud",
          "verses": ["Proverbs 11:2", "Psalm 10:4", "1 John 2:16", "Galatians 6:3"]
        },
        {
          "name": "valuable",
          "verses": ["Matthew 10:31", "1 Timothy 4:8", "Psalm 139:14", "1 Peter 1:18-19"]
        },
        {
          "name": "important",
          "verses": ["1 Corinthians 12:14", "James 1:22", "John 3:16", "Romans 3:23"]
        }        
      ]
    },
    {
      "category": "happy",
      "feelings": [
        {
          "name": "creative",
          "verses": ["Exodus 35:30-35", "Ephesians 2:10", "Genesis 1:1", "Proverbs 22:29"]
        },
        {
          "name": "cheerful",
          "verses": ["Proverbs 17:22", "2 Corinthians 9:7", "James 1:17", "Proverbs 15:15"]
        },
        {
          "name": "inspired",
          "verses": ["John 16:13", "Joshua 1:9", "Matthew 6:31-34", "Proverbs 3:5-6"]
        },
        {
          "name": "energetic",
          "verses": ["Matthew 6:33", "Colossians 1:29", "Luke 21:36", "Acts 3:19-21"]
        },
        {
          "name": "hopeful",
          "verses": ["Romans 8:24-25", "Jeremiah 29:11", "Romans 15:13", "Hebrews 11:1"]
        },
        {
          "name": "grateful",
          "verses": ["1 Thessalonians 5:18", "Hebrews 12:28", "Psalm 100:3-4", "Acts 17:28"]
        }        
      ]
    },
    {
      "category": "peaceful",
      "feelings": [
        {
          "name": "loving",
          "verses": ["John 3:16", "1 Corinthians 13:4-8", "John 13:34-35", "Mark 12:29-31"]
        },
        {
          "name": "content",
          "verses": ["Hebrews 13:5", "1 Timothy 6:6-8", "2 Corinthians 12:10", "Psalm 37:3-5"]
        },
        {
          "name": "thoughtful",
          "verses": ["Philippians 4:8", "Ephesians 4:22-24", "Proverbs 17:22", "Colossians 3:2"]
        },
        {
          "name": "trusting",
          "verses": ["Proverbs 3:5", "Jeremiah 29:11", "Proverbs 3", "Psalm 13:5"]
        },
        {
          "name": "virtue",
          "verses": ["Philippians 4:8", "Colossians 3:12", "2 Peter 1:5-8", "Ephesians 4:25-32"]
        },
        {
          "name": "intimate",
          "verses": ["Hebrews 13:4", "1 Peter 3:7-12", "1 John 4:7-8", "1 Corinthians 13:1-13"]
        }        
      ]
    }
  ];  

  export default EMOTIONS;