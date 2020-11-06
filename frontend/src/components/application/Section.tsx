import { FunctionComponent } from 'react'
import ApplicationCard from './Card'
import Application from '../../types/Application'
import Link from 'next/link'

interface Props {
  title: string
  href: string
  applications: Application[]
}

const ApplicationSection: FunctionComponent<Props> = ({
  href,
  title,
  applications,
}) => {
  return (
    <div className='applications-section'>
      <header>
        <h3>{title}</h3>

        <Link href={href}>
          <button className='show-all-button'>
            <div>Show All</div>
            <img src='/go-next.svg' alt='Next' />
          </button>
        </Link>
      </header>
      <div className='applications'>
        {applications.map((app) => (
          <ApplicationCard key={app.flatpakAppId} application={app} />
        ))}
      </div>
    </div>
  )
}

export default ApplicationSection