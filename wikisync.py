import igem_wikisync as sync

sync.run(
    team='UNSW_Australia',
    src_dir='_site',                 # folder where wiki is stored (_site has 11ty generated site)
    build_dir='wiki_build'               # folder where WikiSync will temporarily store your wiki before uploading
)