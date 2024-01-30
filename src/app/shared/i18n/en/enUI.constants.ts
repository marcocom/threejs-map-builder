import { IUITranslationKeys } from '@shared/models/translationKeys.models';

export const EN_UI_TRANSLATION: IUITranslationKeys = {
  menu: {
    new_world_btn: 'New world',
    continue_btn: 'Continue',
  },
  biomes: {
    desert: 'Desert',
    desert_island: 'Desert Island',
    fjords: 'Fjords',
    highlands: 'Highlands',
    ocean: 'Ocean',
    rainforest: 'Rainforest',
    snowy_hills: 'Snowy Hills',
    swamps: 'Swamps',
    taiga: 'Taiga'
  },
  online: {
    count: 'Online : {{count}}',
    room_joined: 'New user connected',
    system_messages: {
      connection: '{{user}} joined the room',
      disconnection: '{{user}} leaved the room'
    }
  },
  trophy_unlocked: 'Trophy unlocked',
  home: {
    title: 'Mapp Builder',
    subtitle: 'A 3D Terrain Creator',
    debug: 'Debug',
    loading: 'Loading',
    form: {
      seed: 'Choose a seed',
      seed_placeholder: '',
      graphics: 'Graphics',
      high_quality_option: 'High',
      medium_quality_option: 'Medium',
      low_quality_option: 'Low',
      gamemode: 'Game mode',
      singleplayer_option: 'Single User',
      multiplayer_option: 'Multi-User',
      soundmode: 'Sound',
      sound_on_option: 'ON',
      sound_off_option: 'OFF',
      start_btn: 'Create',
      seed_tooltip_title: 'What is a seed?',
      seed_tooltip_text: 'The seed can either be a number, a word or a phrase. It\'s unique pattern will be used to generate a unique world.',
    }
  },
  'trophies-tab': {
    title: 'Trophies',
    sort_by_type: 'Sort by type',
    sort_by_completion_status: 'Sort by completion status',
    sort_by_difficulty: 'Sort by difficulty',
    reset_title: 'Reset your progression',
    reset_text: 'Your progression will be completely erased. You can start from scratch but you cannot go back.',
    reset_btn: 'Reset'
  },
  'tutorial-tab': {
    title: 'Help',
    tab1: {
      reset_btn: 'Reset',
      intro: 'You can modify some of the key bindings by clicking on the associated button then on the desired key on your keyboard.',
      title_commands: 'Keys',
      subtitle_keyboard: 'Keyboard',
      subtitle_mouse: 'Mouse',
      actionkey: {
        down: 'Descend',
        up: 'Ascend',
        right: 'Right',
        left: 'Left',
        back: 'Backwards',
        front: 'Forwards',
        vocal: 'Hold to enable/disable vocal',
        reload: 'Generate a new world',
        mute: 'Toggle sound',
        menu: 'Menu',
        freeze: 'Toggle freeze time',
        chat: 'Toggle chat'
      },
      'mouse_left-click': 'Put an object down',
      'mouse_left-click_name': 'Left click',
      'mouse_right-click': 'Delete an object',
      'mouse_right-click_name': 'Right click',
      mouse_scroll: 'Change current object',
      mouse_scroll_name: 'Scroll',
    },
    tab2: {
      intro: 'You can use your voice to perform certain actions by using the push-to-talk key “V” (by default). Make sure the application has access to your microphone.',
      subtitle: 'Voice commands',
      subtitle_a1: 'Place objects',
      subtitle_a2: 'Delete objects',
      subtitle_a3: 'Change time',
      subtitle_a4: 'Change current object',
      subtitle_a5: 'Freeze time',
      text_a1: 'To place an object, you must be at a proper distance from the ground, a green cursor should appear at the center of the screen if it’s the case. Then say distinctly “place”.',
      text_a2: 'To delete an object, once you are at a proper distance, an orange cursor should appear at the center of the screen. Then say distinctly “void”.',
      text_a3: 'To change the in-game time, say distinctly “night” or “day”.',
      text_a4: 'To cycle through the available objects, say distinctly "next".',
      text_a5: 'To freeze the time, say distinctly "freeze".',
    },
  },
  'home-tab': {
    title: 'About',
    about_title: 'Mapp-Builder',
    seed: 'Seed used to generate the world',
    article: {
      title_project: 'Our project',
      title_objectives: 'Unlock all trophies',
      title_help: 'In case of problems',
      title_tech: 'Technologies used',
      title_code: 'Source code',
      p1: 'Mapp-Builder is a project aiming at generating random interactive 3d worlds. Those worlds are brought to life using algorithms seen in the 3rd year AI course at IMAC engineering school.',
      p2: 'You can unlock a total of 36 trophies by searching the 8 different biomes and performing specific actions. You have the possibility to follow your progress in the dedicated tabs. Each generated world is unique and identified by a seed. To discover a new generation you can simply reload the page or press the "New World" button. A multiplayer mode is available for those who want to roam the different worlds with their friends.',
      p3: 'The tutorial tab lists all the usable keys, you can also change them if necessary. It’s strongly recommended to use a PC version of Chrome for an optimal experience.',
      p4: 'The application was developed with Typescript.',
      p5: '3D world :',
      p6: 'Interface :',
      p7: 'Multiplayer :',
      p8: 'Voice recognition :'
    },
    share: {
      text: 'You can share the current session with the following link :'
    }
  },
  'credits-tab': {
    title: 'Credits',
    description_marco: 'UI Engineer',
    description_jeremy: 'Project Owner/Analyst',
    description_kyle: 'UI/UX Designer',
    description_nick: 'Project Manager',
  },
  'progress-tab': {
    title: 'Progression',
    title_stats: 'Statistics',
    title_biomes: 'Visited biomes',
    game_played: 'Games played : {{count}}',
    distance_travelled: 'Distance travelled : {{count}} miles',
    going_underwater: 'Underwater : {{count}}',
    objects_placed: 'Objects placed : {{count}}',
    objects_placed_submarine: 'Objects placed underwater : {{count}}',
    objects_placed_voice: 'Objects placed with voice : {{count}}',
    objects_removed: 'Objects removed : {{count}}',
    unlock_trophies_percentage: 'Trophies unlocked : {{count}}%',
    play_online: 'Games played online : {{count}}',
  },
  'contact-tab': {
    title: 'Contact',
    header: 'A problem, a question or some feedback ? You can contact us with the form below. We will try to answer as quickly as possible.',
    email: 'Email',
    subject: 'Subject',
    select: {
      bug: 'Bug',
      improvement: 'Improvement',
      other: 'Other'
    },
    message: 'Message',
    send: 'Send'
  },
  cookies: {
    more: 'Learn more',
    decline: 'Decline',
    allow: 'Allow cookies',
    message: 'We use cookies to measure how visitors interact with the website.'
  }
};
