import {PullRequestEvent} from '@octokit/webhooks-types'

// @see https://github.com/octokit/webhooks/blob/master/payload-examples/api.github.com/pull_request/opened.payload.json
export const pr: PullRequestEvent = {
  action: 'opened',
  number: 2,
  pull_request: {
    url: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2',
    id: 279147437,
    node_id: 'MDExOlB1bGxSZXF1ZXN0Mjc5MTQ3NDM3',
    html_url: 'https://github.com/Codertocat/Hello-World/pull/2',
    diff_url: 'https://github.com/Codertocat/Hello-World/pull/2.diff',
    patch_url: 'https://github.com/Codertocat/Hello-World/pull/2.patch',
    issue_url: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
    number: 2,
    state: 'open',
    locked: false,
    title: 'Update the README with new information.',
    user: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false
    },
    body: 'This is a pretty simple change that we need to pull into master.',
    created_at: '2019-05-15T15:20:33Z',
    updated_at: '2019-05-15T15:20:33Z',
    closed_at: null,
    merged_at: null,
    merge_commit_sha: null,
    assignee: null,
    assignees: [
      {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false
      }
    ],
    requested_reviewers: [
      {
        login: 'octocat',
        id: 5346,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'http://alambic.github.com/avatars/u/5346?',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'http://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url:
          'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false
      }
    ],
    requested_teams: [],
    labels: [
      {
        id: 1362934389,
        node_id: 'MDU6TGFiZWwxMzYyOTM0Mzg5',
        url: 'https://api.github.com/repos/Codertocat/Hello-World/labels/bug',
        name: 'bug',
        color: 'd73a4a',
        default: true,
        description: "Something isn't working"
      }
    ],
    milestone: null,
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits',
    review_comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments',
    review_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
    head: {
      label: 'Codertocat:changes',
      ref: 'changes',
      sha: 'ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        is_template: false,
        topics: [],
        visibility: 'public',
        web_commit_signoff_required: false,
        custom_properties: {}
      }
    },
    base: {
      label: 'Codertocat:master',
      ref: 'master',
      sha: 'f95f852bd8fca8fcc58a9a2d6c842781e32a215e',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'Hello-World',
        full_name: 'Codertocat/Hello-World',
        private: false,
        owner: {
          login: 'Codertocat',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Codertocat',
          html_url: 'https://github.com/Codertocat',
          followers_url: 'https://api.github.com/users/Codertocat/followers',
          following_url:
            'https://api.github.com/users/Codertocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Codertocat/subscriptions',
          organizations_url: 'https://api.github.com/users/Codertocat/orgs',
          repos_url: 'https://api.github.com/users/Codertocat/repos',
          events_url:
            'https://api.github.com/users/Codertocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Codertocat/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/Codertocat/Hello-World',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/Codertocat/Hello-World',
        forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
        keys_url:
          'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
        hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
        issue_events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/Codertocat/Hello-World/events',
        assignees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
        blobs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/Codertocat/Hello-World/languages',
        stargazers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
        contributors_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contributors',
        subscribers_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/Codertocat/Hello-World/subscription',
        commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/Codertocat/Hello-World/merges',
        archive_url:
          'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/Codertocat/Hello-World/downloads',
        issues_url:
          'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Codertocat/Hello-World/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/Codertocat/Hello-World.git',
        ssh_url: 'git@github.com:Codertocat/Hello-World.git',
        clone_url: 'https://github.com/Codertocat/Hello-World.git',
        svn_url: 'https://github.com/Codertocat/Hello-World',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        is_template: false,
        topics: [],
        visibility: 'public',
        web_commit_signoff_required: false,
        custom_properties: {}
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2'
      },
      html: {href: 'https://github.com/Codertocat/Hello-World/pull/2'},
      issue: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2'
      },
      comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments'
      },
      review_comments: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/comments'
      },
      review_comment: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/comments{/number}'
      },
      commits: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/pulls/2/commits'
      },
      statuses: {
        href: 'https://api.github.com/repos/Codertocat/Hello-World/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821'
      }
    },
    author_association: 'OWNER',
    auto_merge: null,
    active_lock_reason: null,
    draft: false,
    merged: false,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 1,
    additions: 1,
    deletions: 1,
    changed_files: 1
  },
  repository: {
    id: 186853002,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
    name: 'Hello-World',
    full_name: 'Codertocat/Hello-World',
    private: false,
    owner: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/Codertocat/Hello-World',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Codertocat/Hello-World',
    forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
    keys_url:
      'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
    hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
    issue_events_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Codertocat/Hello-World/events',
    assignees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
    blobs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Codertocat/Hello-World/languages',
    stargazers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
    contributors_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contributors',
    subscribers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
    subscription_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscription',
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Codertocat/Hello-World/merges',
    archive_url:
      'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Codertocat/Hello-World/downloads',
    issues_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/deployments',
    created_at: '2019-05-15T15:19:25Z',
    updated_at: '2019-05-15T15:19:27Z',
    pushed_at: '2019-05-15T15:20:32Z',
    git_url: 'git://github.com/Codertocat/Hello-World.git',
    ssh_url: 'git@github.com:Codertocat/Hello-World.git',
    clone_url: 'https://github.com/Codertocat/Hello-World.git',
    svn_url: 'https://github.com/Codertocat/Hello-World',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master',
    is_template: false,
    topics: [],
    visibility: 'public',
    web_commit_signoff_required: false,
    custom_properties: {}
  },
  installation: {
    id: 1,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMQ=='
  },
  sender: {
    login: 'Codertocat',
    id: 21031067,
    node_id: 'MDQ6VXNlcjIxMDMxMDY3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Codertocat',
    html_url: 'https://github.com/Codertocat',
    followers_url: 'https://api.github.com/users/Codertocat/followers',
    following_url:
      'https://api.github.com/users/Codertocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Codertocat/subscriptions',
    organizations_url: 'https://api.github.com/users/Codertocat/orgs',
    repos_url: 'https://api.github.com/users/Codertocat/repos',
    events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Codertocat/received_events',
    type: 'User',
    site_admin: false
  }
}
