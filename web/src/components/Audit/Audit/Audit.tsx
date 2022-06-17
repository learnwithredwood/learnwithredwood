import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_AUDIT_MUTATION = gql`
  mutation DeleteAuditMutation($id: String!) {
    deleteAudit(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Audit = ({ audit }) => {
  const [deleteAudit] = useMutation(DELETE_AUDIT_MUTATION, {
    onCompleted: () => {
      toast.success('Audit deleted')
      navigate(routes.audits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete audit ' + id + '?')) {
      deleteAudit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Audit {audit.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{audit.id}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(audit.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(audit.updatedAt)}</td>
            </tr><tr>
              <th>User id</th>
              <td>{audit.userId}</td>
            </tr><tr>
              <th>Log</th>
              <td>{audit.log}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAudit({ id: audit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(audit.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Audit
