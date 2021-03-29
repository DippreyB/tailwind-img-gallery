import React from 'react'

export const ImageCard = ({img}) => {
    const tags = img.tags.split(",");
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full max-h-full object-cover" src={img.webformatURL} alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {img.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
             {img.views}
          </li>
          <li>
            <strong>Downloads: </strong>
             {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
             {img.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
          {tags.map(tag => (
              <span key={img.id+tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                #{tag}
            </span>
            ))
          }
      </div>
    </div>
    )
}
