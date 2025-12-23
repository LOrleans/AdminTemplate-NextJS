interface ContentProps {
  children?: any
}

export default function Content(props: ContentProps){

  return (
    <div>
      <h1 className="flex flex-col mt-7">
        {props.children}
      </h1>
    </div>
  )
}