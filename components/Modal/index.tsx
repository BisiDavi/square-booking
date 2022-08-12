import { PropsWithChildren } from "react";


interface Props {
  title?: string;
  toggleModal: (value: null | "auth-modal") => void;
  modal: null | "auth-modal";
}

export default function Modal({
  children,
  title,
  modal,
  toggleModal,
}: PropsWithChildren<Props>) {
  return (
    <>
      {modal === "auth-modal" ? (
        <>
          <div
            role="dialog"
            className="justify-center h-4/5 site-modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 z-40 h-96 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {title && (
                  <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl mr-4 pb-0 mb-0 font-semibold">
                      {title}
                    </h3>
                    <button
                      className="hover:bg-red-500 hover:text-white hover:border-white p-1 ml-auto border border-gray-900 rounded-full text-black flex items-center float-right -mr-3 -mt-1 text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => toggleModal(null)}
                    >
                      <span className="close text-center h-4 w-4 p-1  flex text-2xl items-center justify-center">
                        ×
                      </span>
                    </button>
                  </div>
                )}
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div
            className="opacity-50 fixed inset-0 z-50 bg-black"
            onClick={() => toggleModal(null)}
          ></div>
        </>
      ) : null}
      <style jsx>
        {`
          .site-modal {
            z-index: 100;
            height: fit-content;
            width: fit-content;
            margin: auto;
            border: none;
          }
          .close {
            margin-top: -2.5px;
          }
        `}
      </style>
    </>
  );
}
