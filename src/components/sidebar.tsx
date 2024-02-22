import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  House,
  MagnifyingGlass,
  Pencil,
  User,
  Users
} from 'phosphor-react'
import twitterLogo from '../assets/logo-twitter.svg'

import { NavLink } from 'react-router-dom'
import './sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="#">
          <MagnifyingGlass />
          <span>Explore</span>
        </a>
        <a href="#">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="#">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="#">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="#">
          <Users />
          <span>Communities</span>
        </a>
        <a href="#">
          <User />
          <span>Profile</span>
        </a>
        <a href="#">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-post" type="button">
        <Pencil />
        <span>Post</span>
      </button>
    </aside>
  )
}
